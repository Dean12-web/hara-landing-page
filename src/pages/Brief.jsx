// src/pages/Brief.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { servicesData, pricingPlans } from "../data/haraData";

// Nilai awal draft
const initialDraft = {
  service: "social-media-management",
  plan: "starter",
  budget: "",
  timeline: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  description: "",
  reference: "",
  consent: false,
};

// Opsi kisaran anggaran & timeline
const budgetOptions = [
  "Di bawah Rp1.500.000",
  "Rp1.500.000–Rp3.000.000",
  "Rp3.000.000–Rp5.000.000",
  "Di atas Rp5.000.000",
  "Perlu rekomendasi",
];

const timelineOptions = [
  "Secepatnya",
  "Dalam 2–4 minggu",
  "1–2 bulan lagi",
  "Masih eksplorasi",
];

export default function Brief() {
  const [searchParams] = useSearchParams();
  const formRef = useRef(null);

  // State wizard step (1, 2, 3)
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedBrief, setSubmittedBrief] = useState(null);

  // State draft dengan sinkronisasi sessionStorage
  const [draft, setDraft] = useState(() => {
    try {
      const saved = sessionStorage.getItem("hara-draft-v1");
      return saved ? { ...initialDraft, ...JSON.parse(saved) } : initialDraft;
    } catch {
      return initialDraft;
    }
  });

  // Baca query parameter dari URL (contoh: ?service=...&plan=... atau ?new=1)
  useEffect(() => {
    if (searchParams.get("new") === "1") {
      setDraft(initialDraft);
      sessionStorage.removeItem("hara-draft-v1");
      return;
    }

    const qService = searchParams.get("service");
    const qPlan = searchParams.get("plan");

    if (qService && servicesData.some((s) => s.id === qService)) {
      setDraft((prev) => ({
        ...prev,
        service: qService,
        plan: qPlan && pricingPlans.some((p) => p.id === qPlan) ? qPlan : prev.plan,
      }));
    }
  }, [searchParams]);

  // Simpan draft ke sessionStorage setiap kali ada perubahan
  useEffect(() => {
    try {
      sessionStorage.setItem("hara-draft-v1", JSON.stringify(draft));
    } catch (e) {
      console.error("Gagal menyimpan draft ke sessionStorage:", e);
    }
  }, [draft]);

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDraft((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrorMsg("");
  };

  // Helper data layanan & paket yang dipilih
  const currentService =
    servicesData.find((s) => s.id === draft.service) || servicesData[0];
  const currentPlan =
    draft.service === "social-media-management"
      ? pricingPlans.find((p) => p.id === draft.plan) || pricingPlans[0]
      : null;

  // Estimasi harga
  const estimatedPrice = currentPlan ? currentPlan.price : currentService.price;
  const estimatedPeriod = currentService.unit ? currentService.unit.replace("/ ", "") : "project";

  // Scroll kembali ke atas form saat pindah langkah
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Validasi Step 1
  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (!draft.service) {
      setErrorMsg("Pilih salah satu layanan utama.");
      return;
    }
    if (!draft.budget) {
      setErrorMsg("Pilih kisaran anggaran Anda.");
      return;
    }
    if (!draft.timeline) {
      setErrorMsg("Pilih target waktu mulai.");
      return;
    }
    setErrorMsg("");
    setStep(2);
    scrollToForm();
  };

  // Validasi Step 2
  const handleNextStep2 = (e) => {
    e.preventDefault();
    if (
      !draft.name.trim() ||
      !draft.company.trim() ||
      !draft.email.trim() ||
      !draft.phone.trim()
    ) {
      setErrorMsg("Lengkapi semua informasi kontak bertanda bintang (*).");
      return;
    }
    if (draft.description.trim().length < 20) {
      setErrorMsg("Ceritakan kebutuhan project minimal 20 karakter.");
      return;
    }
    setErrorMsg("");
    setStep(3);
    scrollToForm();
  };

  // Final Submit Step 3
  const handleSubmitBrief = (e) => {
    e.preventDefault();
    if (!draft.consent) {
      setErrorMsg("Harap setujui pernyataan penyimpanan data lokal.");
      return;
    }

    // Generate ID unik brief
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const briefId = `HARA-${dateStr}-${randomHex}`;

    const newRecord = {
      ...draft,
      id: briefId,
      created: new Date().toISOString(),
      serviceName: currentService.title,
      planName: currentPlan ? currentPlan.title : "Scope awal",
      amount: estimatedPrice,
      unit: currentService.unit,
    };

    // Simpan ke localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("hara-briefs-v1") || "[]");
      localStorage.setItem("hara-briefs-v1", JSON.stringify([newRecord, ...existing]));
    } catch (err) {
      console.warn("Storage penuh atau tidak tersedia:", err);
    }

    // Reset draft
    sessionStorage.removeItem("hara-draft-v1");
    setSubmittedBrief(newRecord);
    setStep(1);
    setDraft(initialDraft);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Format teks untuk unduh file .txt
  const generateBriefText = (b) => {
    return `HARA — BRIEF PROJECT
ID: ${b.id}
Disimpan: ${new Date(b.created).toLocaleString("id-ID")}
Status: Tersimpan lokal di perangkat

Layanan: ${b.serviceName}
Paket: ${b.planName}
Estimasi: ${b.amount} ${b.unit}

Nama Klien: ${b.name}
Brand / Usaha: ${b.company}
Email: ${b.email}
WhatsApp: ${b.phone}
Anggaran: ${b.budget}
Target Mulai: ${b.timeline}
Referensi: ${b.reference || "-"}

DESKRIPSI KEBUTUHAN:
${b.description}

Catatan:
Estimasi bukan invoice resmi. Scope dan biaya final akan disepakati melalui penawaran resmi tim HARA.
`;
  };

  // Unduh brief sebagai file .txt
  const handleDownload = (b) => {
    const text = generateBriefText(b);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${b.id}.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  // ==========================================
  // TAMPILAN JIKA BRIEF BERHASIL DISIMPAN
  // ==========================================
  if (submittedBrief) {
    return (
      <main id="main" tabIndex="-1">
        <section className="section">
          <div className="wrap center">
            <div className="success-icon" style={{ fontSize: "50px", color: "var(--lime)", marginBottom: "20px" }}>
              ✓
            </div>
            <div className="eyebrow lime">Brief saved locally</div>
            <h1 style={{ fontSize: "clamp(38px, 6vw, 68px)", marginTop: "10px" }}>
              Ide Anda sudah
              <br />
              <span className="lime">tersusun rapi.</span>
            </h1>
            <p className="lead mt">
              Brief <b>{submittedBrief.id}</b> berhasil disimpan di perangkat ini. Langkah
              selanjutnya: unduh ringkasannya lalu bagikan ke tim HARA untuk mulai berdiskusi.
            </p>

            <div className="notice mt">
              Belum dikirim otomatis ke server. Tidak ada biaya atau pembayaran pada tahap ini.
            </div>

            <div className="card mt" style={{ maxWidth: "600px", margin: "30px auto", textAlign: "left" }}>
              <h3>{submittedBrief.company}</h3>
              <div className="summary-row mt">
                <span>Layanan</span>
                <strong>{submittedBrief.serviceName}</strong>
              </div>
              <div className="summary-row">
                <span>Paket</span>
                <strong>{submittedBrief.planName}</strong>
              </div>
              <div className="summary-row total">
                <span>Estimasi mulai</span>
                <strong>{submittedBrief.amount}</strong>
              </div>

              <div className="flow mt" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleDownload(submittedBrief)}
                >
                  Unduh ringkasan ↓
                </button>
                <a
                  className="btn outline"
                  href="https://www.instagram.com/hara.hq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi HARA ↗
                </a>
              </div>
            </div>

            <div className="flow mt" style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
              <button
                type="button"
                className="btn outline small"
                onClick={() => setSubmittedBrief(null)}
              >
                Buat brief baru +
              </button>
              <Link className="btn outline small" to="/services">
                Eksplorasi layanan lain ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ==========================================
  // TAMPILAN FORMULIR UTAMA WIZARD
  // ==========================================
  return (
    <main id="main" tabIndex="-1">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Beranda</Link> / Start a project
          </div>
          <div className="eyebrow lime">Start a project</div>
          <h1>
            Great work starts
            <br />
            <span className="lime">with a good brief.</span>
          </h1>
          <p className="lead">
            Tiga langkah sederhana untuk merapikan kebutuhan project Anda.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="wrap form-layout" ref={formRef}>
          {/* Kolom Kiri: Form Wizard */}
          <div>
            {/* Indikator Langkah */}
            <div className="steps" aria-label="Langkah form">
              <div
                className={`step ${step >= 1 ? "active" : ""}`}
                aria-current={step === 1 ? "step" : undefined}
              >
                01 / Kebutuhan
              </div>
              <div
                className={`step ${step >= 2 ? "active" : ""}`}
                aria-current={step === 2 ? "step" : undefined}
              >
                02 / Tentang Anda
              </div>
              <div
                className={`step ${step >= 3 ? "active" : ""}`}
                aria-current={step === 3 ? "step" : undefined}
              >
                03 / Review
              </div>
            </div>

            {/* STEP 1: Kebutuhan Project */}
            {step === 1 && (
              <form onSubmit={handleNextStep1} id="brief-form">
                <h2 className="form-title">Kebutuhan project.</h2>
                <p className="muted mb">
                  Pilih layanan utama. Tambahan layanan bisa ditulis pada brief.
                </p>

                {/* Layanan Utama (Radio Cards) */}
                <div className="field">
                  <label>Layanan utama *</label>
                  <div className="choice-grid">
                    {servicesData.map((svc) => (
                      <label key={svc.id} className="choice">
                        <input
                          type="radio"
                          name="service"
                          value={svc.id}
                          checked={draft.service === svc.id}
                          onChange={handleChange}
                          required
                        />
                        <span>
                          <b>{svc.title}</b>
                          <small>
                            Mulai {svc.price} {svc.unit}
                          </small>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dropdown Paket (Khusus Social Media) */}
                {draft.service === "social-media-management" && (
                  <div className="field">
                    <label htmlFor="plan">Paket social media *</label>
                    <select
                      id="plan"
                      name="plan"
                      value={draft.plan}
                      onChange={handleChange}
                    >
                      {pricingPlans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.title} — {plan.price} / bulan
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Grid Budget & Timeline */}
                <div className="grid two">
                  <div className="field">
                    <label htmlFor="budget">Kisaran anggaran *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={draft.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih kisaran</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="timeline">Target mulai *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={draft.timeline}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih target waktu</option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {errorMsg && (
                  <p className="error" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="form-actions">
                  <Link className="btn outline" to="/services">
                    Layanan
                  </Link>
                  <button className="btn" type="submit">
                    Lanjut →
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Tentang Anda */}
            {step === 2 && (
              <form onSubmit={handleNextStep2} id="brief-form">
                <h2 className="form-title">Kenalan lebih dekat.</h2>
                <p className="muted mb">
                  Beri sedikit konteks agar kebutuhan Anda mudah dipahami.
                </p>

                <div className="grid two">
                  <div className="field">
                    <label htmlFor="name">Nama lengkap *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength="150"
                      value={draft.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      autoComplete="name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Nama bisnis / brand *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      maxLength="150"
                      value={draft.company}
                      onChange={handleChange}
                      placeholder="Nama usaha Anda"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="grid two">
                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength="150"
                      value={draft.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Nomor WhatsApp *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength="25"
                      value={draft.phone}
                      onChange={handleChange}
                      placeholder="0812xxxxxxxx"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="description">Ceritakan kebutuhan Anda *</label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    minLength="20"
                    maxLength="4000"
                    rows="5"
                    value={draft.description}
                    onChange={handleChange}
                    placeholder="Tentang bisnis, tujuan project, target audiens, dan hasil yang diharapkan…"
                  ></textarea>
                  <small style={{ color: "var(--muted)", display: "block", marginTop: "4px" }}>
                    Minimal 20 karakter. Jangan sertakan password atau data rahasia.
                  </small>
                </div>

                <div className="field">
                  <label htmlFor="reference">Referensi website / akun sosial</label>
                  <input
                    id="reference"
                    name="reference"
                    type="text"
                    maxLength="150"
                    value={draft.reference}
                    onChange={handleChange}
                    placeholder="Contoh: @brand atau link referensi"
                  />
                </div>

                {errorMsg && (
                  <p className="error" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn outline"
                    onClick={() => {
                      setStep(1);
                      scrollToForm();
                    }}
                  >
                    ← Kembali
                  </button>
                  <button className="btn" type="submit">
                    Lanjut →
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Review & Final Check */}
            {step === 3 && (
              <form onSubmit={handleSubmitBrief} id="brief-form">
                <h2 className="form-title">Satu pemeriksaan terakhir.</h2>
                <p className="muted mb">
                  Pastikan informasi sudah sesuai sebelum disimpan.
                </p>

                <div className="flex between" style={{ alignItems: "center", marginBottom: "15px" }}>
                  <h3>Kontak & Kebutuhan</h3>
                  <button
                    type="button"
                    className="link"
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--lime)" }}
                    onClick={() => {
                      setStep(2);
                      scrollToForm();
                    }}
                  >
                    Ubah ↗
                  </button>
                </div>

                <div className="summary-row">
                  <span>Nama</span>
                  <strong>{draft.name}</strong>
                </div>
                <div className="summary-row">
                  <span>Brand</span>
                  <strong>{draft.company}</strong>
                </div>
                <div className="summary-row">
                  <span>Email</span>
                  <strong>{draft.email}</strong>
                </div>
                <div className="summary-row">
                  <span>WhatsApp</span>
                  <strong>{draft.phone}</strong>
                </div>
                <div className="summary-row">
                  <span>Anggaran</span>
                  <strong>{draft.budget}</strong>
                </div>
                <div className="summary-row">
                  <span>Target mulai</span>
                  <strong>{draft.timeline}</strong>
                </div>
                <div className="summary-row">
                  <span>Referensi</span>
                  <strong>{draft.reference || "Belum ditambahkan"}</strong>
                </div>

                <h3 className="mt" style={{ marginTop: "30px" }}>Brief Project</h3>
                <p
                  className="muted mt"
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    background: "#1c1c22",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  {draft.description}
                </p>

                <div className="notice mt mb" style={{ margin: "20px 0" }}>
                  Brief akan disimpan di browser ini dan belum dikirim langsung ke tim HARA.
                  Setelah menyimpan, Anda dapat mengunduh ringkasannya untuk dikirimkan melalui
                  kontak resmi. Tidak ada pembayaran di tahap ini.
                </div>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={draft.consent}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    Saya memahami data brief ini disimpan di perangkat saya. Saya dapat mengunduh
                    ringkasannya kapan saja.
                  </span>
                </label>

                {errorMsg && (
                  <p className="error" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn outline"
                    onClick={() => {
                      setStep(2);
                      scrollToForm();
                    }}
                  >
                    ← Kembali
                  </button>
                  <button className="btn" type="submit">
                    Simpan brief di perangkat ↗
                  </button>
                </div>
              </form>
            )}

            <p className="muted mt" style={{ fontSize: "12px", marginTop: "20px" }}>
              * Wajib diisi. Draft tersimpan otomatis selama sesi browser aktif.
            </p>
          </div>

          {/* Kolom Kanan: Sidebar Kalkulator Pilihan */}
          <aside className="card sidebar">
            <div className="eyebrow lime">Your starting point</div>
            <h3>Ringkasan pilihan</h3>

            <div className="summary-row mt">
              <span>Layanan</span>
              <strong>{currentService.title}</strong>
            </div>

            <div className="summary-row">
              <span>Paket</span>
              <strong>{currentPlan ? currentPlan.title : "Scope awal"}</strong>
            </div>

            <div className="summary-row">
              <span>Periode</span>
              <strong>{estimatedPeriod}</strong>
            </div>

            <div className="summary-row total">
              <span>Estimasi mulai</span>
              <strong>
                {estimatedPrice}
                {currentPlan?.id === "pro" ? "+" : ""}
              </strong>
            </div>

            <p className="mt" style={{ fontSize: "12px", color: "var(--muted)", marginTop: "16px" }}>
              Estimasi bukan invoice dan tidak memerlukan pembayaran di muka. Penawaran final
              disepakati setelah ruang lingkup kerja terkonfirmasi.
            </p>

            <Link
              className="link"
              to="/pricing"
              style={{ display: "inline-block", marginTop: "22px" }}
            >
              Lihat rincian paket ↗
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}