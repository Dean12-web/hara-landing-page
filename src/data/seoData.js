// src/data/seoData.js

export const SITE_URL = "https://haracreative.com";
export const BRAND_NAME = "HARA Creative Studio";

export const DEFAULT_SEO = {
  title: "HARA Creative Studio | Creative & Digital Agency Medan",
  description:
    "HARA Creative adalah creative & digital studio berbasis di Medan. Layanan social media management, pembuatan website & web apps, fotografi & videografi produk, digital advertising, hingga branding kit.",
  keywords:
    "creative agency medan, digital agency medan, social media management medan, jasa pembuatan website, branding kit medan, foto video produk, digital advertising medan, hara creative, hara studio",
  author: "HARA Creative Studio",
  ogType: "website",
  ogImage: `${SITE_URL}/hara-icon.ico`,
  canonical: SITE_URL,
};

export const PAGE_SEO = {
  home: {
    title: "HARA Creative Studio | Creative & Digital Agency Medan",
    description:
      "Studio kreatif & digital di Medan. Kami membantu brand bertumbuh lewat strategi social media management, pembuatan website responsif, visual photo-video, dan identitas branding terarah.",
    canonical: `${SITE_URL}/`,
  },
  about: {
    title: "Tentang Kami | HARA Creative Studio Medan",
    description:
      "Kenali HARA Creative Studio. Kami menghubungkan strategi, desain, konten, dan teknologi agar brand Anda hadir dengan karakter kuat dan suara yang konsisten.",
    canonical: `${SITE_URL}/about`,
  },
  services: {
    title: "Layanan Kreatif & Digital Agency | HARA Creative",
    description:
      "Layanan lengkap HARA Creative: Social Media Management, Web Apps Development, Digital Advertising, Photo & Videography, dan Logo & Branding Kit.",
    canonical: `${SITE_URL}/services`,
  },
  portfolio: {
    title: "Portofolio & Studi Kasus Proyek | HARA Creative",
    description:
      "Lihat portofolio dan studi kasus karya HARA Creative: fotografi menu kuliner, campaign digital, strategi media sosial, dan desain website interaktif.",
    canonical: `${SITE_URL}/portfolio`,
  },
  pricing: {
    title: "Paket Harga Layanan & Social Media | HARA Creative",
    description:
      "Transparansi harga paket social media management bulanan dan layanan kreatif project-based di HARA Creative. Mulai dari Rp 750.000 dengan ruang lingkup yang jelas.",
    canonical: `${SITE_URL}/pricing`,
  },
  contact: {
    title: "Kontak & Konsultasi Studio | HARA Creative Medan",
    description:
      "Hubungi HARA Creative Medan untuk konsultasi kebutuhan branding, website, dan digital marketing bisnis Anda via WhatsApp atau datang ke studio kami.",
    canonical: `${SITE_URL}/contact`,
  },
  brief: {
    title: "Formulir Project Brief | Mulai Bersama HARA Creative",
    description:
      "Susun kebutuhan project bisnis Anda melalui project brief terstruktur HARA Creative untuk mendapatkan estimasi penawaran dan strategi yang tepat sasaran.",
    canonical: `${SITE_URL}/brief`,
  },
  faq: {
    title: "Tanya Jawab (FAQ) Layanan & Kerjasama | HARA Creative",
    description:
      "Jawaban lengkap seputar cara memulai project, struktur revisi, durasi pengerjaan, paket iklan, hingga kerja sama jarak jauh bersama HARA Creative.",
    canonical: `${SITE_URL}/faq`,
  },
  notFound: {
    title: "404 - Halaman Tidak Ditemukan | HARA Creative",
    description: "Halaman yang Anda tuju tidak ditemukan pada situs HARA Creative Studio.",
    noindex: true,
  },
};

// Generator JSON-LD Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: BRAND_NAME,
  alternateName: "HARA Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/hara-icon.ico`,
  image: `${SITE_URL}/hara-icon.ico`,
  description: DEFAULT_SEO.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressRegion: "Sumatera Utara",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: ["https://www.instagram.com/hara.hq/"],
  priceRange: "Rp 750.000 - Rp 5.000.000",
  telephone: "+6281375357240",
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
  })),
});

export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.title,
  name: `${service.title} | ${BRAND_NAME}`,
  description: service.text || service.desc,
  provider: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: service.price.replace(/[^0-9]/g, ""),
    priceCurrency: "IDR",
    description: service.unit,
  },
});

export const getPortfolioSchema = (work) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: work.title,
  headline: work.tagline || work.subtitle,
  description: work.desc,
  creator: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
  genre: work.category,
});

export const getFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});
