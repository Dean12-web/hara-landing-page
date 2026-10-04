import { Link } from "react-router-dom";
import CtaBanner from "../components/CtaBanner";

const principles = [
  {
    number: "01 / Our principle",
    title: "Dengar dulu.",
    desc: "Memahami masalah sebelum menentukan bentuk solusinya.",
  },
  {
    number: "02 / Our principle",
    title: "Buat berarti.",
    desc: "Setiap elemen punya alasan, setiap pekerjaan punya tujuan.",
  },
  {
    number: "03 / Our principle",
    title: "Tumbuh bersama.",
    desc: "Komunikasi terbuka, scope jelas, dan ruang untuk belajar.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Beranda</Link> / About HARA
          </div>
          <div className="eyebrow lime">About HARA</div>
          <h1>
            Small studio.<br />
            <span className="lime">Big creative energy.</span>
          </h1>
          <p className="lead">
            Kami percaya brand yang kuat dimulai dari pemahaman yang baik.
            Tentang bisnisnya, orang-orangnya, dan cerita yang ingin disampaikan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid two">
          <div className="detail-text">
            <div className="eyebrow lime">The way we see it</div>
            <h2>
              Kreativitas yang<br />
              punya tujuan.
            </h2>
            <p>
              HARA adalah creative &amp; digital studio berbasis di Medan. Kami
              menghubungkan strategi, desain, konten, dan teknologi agar brand
              hadir dengan suara yang konsisten.
            </p>
            <p>
              Setiap bisnis punya tantangan berbeda. Karena itu, proses dimulai
              dari percakapan: apa yang ingin dicapai, siapa yang ingin dijangkau,
              dan apa yang paling dibutuhkan saat ini.
            </p>
            <Link className="btn outline mt" to="/services">
              Kenali layanan kami ↗
            </Link>
          </div>
          <div className="about-mark">
            <div className="huge-star">✳</div>
            <b>HARA.</b>
            <span>BUILD. CREATE. GROW.</span>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <div className="eyebrow">What matters to us</div>
          <h2 className="mb">Cara kami bekerja.</h2>
          <div className="grid three">
            {principles.map((item, index) => (
              <article className="card" key={index}>
                <div className="eyebrow">{item.number}</div>
                <h3>{item.title}</h3>
                <p className="mt">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}