// src/components/SEO.jsx
import { useEffect } from "react";
import { DEFAULT_SEO, BRAND_NAME } from "../data/seoData";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  schema = null,
}) {
  useEffect(() => {
    // 1. Title
    const finalTitle = title || DEFAULT_SEO.title;
    document.title = finalTitle;

    // Helper untuk set atau create meta tag (name atau property)
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description || DEFAULT_SEO.description);
    setMetaTag("name", "keywords", keywords || DEFAULT_SEO.keywords);
    setMetaTag("name", "author", DEFAULT_SEO.author);
    setMetaTag(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
    );

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", finalTitle);
    setMetaTag("property", "og:description", description || DEFAULT_SEO.description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", BRAND_NAME);
    setMetaTag("property", "og:image", ogImage || DEFAULT_SEO.ogImage);
    if (canonical) {
      setMetaTag("property", "og:url", canonical);
    }

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", finalTitle);
    setMetaTag("name", "twitter:description", description || DEFAULT_SEO.description);
    setMetaTag("name", "twitter:image", ogImage || DEFAULT_SEO.ogImage);

    // 5. Canonical Link Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }

    // 6. JSON-LD Schema
    const schemaScriptId = "hara-dynamic-schema";
    let schemaScript = document.getElementById(schemaScriptId);
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = schemaScriptId;
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    // Optional cleanup on unmount
    return () => {
      // biarkan title dan tag terakhir tetap ada sampai route berikutnya me-replace
    };
  }, [title, description, keywords, canonical, ogImage, ogType, noindex, schema]);

  return null;
}
