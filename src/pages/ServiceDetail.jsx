import { useParams, Link, Navigate } from "react-router-dom";
import { servicesData } from "../data/haraData";
import CtaBanner from "../components/CtaBanner";
import Faq from "../components/Faq";

export default function ServiceDetail(){
    const {id} = useParams();
    const service = servicesData.find((s) => s.id === id);

    if(!service){
        return <Navigate to="/services" replace/>;
    }

    return (
        <>
        <section className="page-hero">
            <div className="wrap">
                <div className="crumb">
                    <Link to="/">
                        Beranda
                    </Link> / <Link to="/services">Layanan</Link> / {" "}
                    {service.short || service.title}
                </div>
                <div className="eyebrow lime">
                    Service / {service.short || service.title}
                </div>
                <h1>{service.title}</h1>
                <p className="lead">{service.desc}</p>
            </div>
        </section>
        <section className="section">
          <div className="wrap split">
            <div className="detail-text">
                <div className="eyebrow lime">The right starting point</div>
                <h2>{service.desc}</h2>
                <p>{service.text}</p>

                <h3>Apa yang Anda dapatkan</h3>
                <ul className="checklist">
                    {service.deliverables &&
                        service.deliverables.map((item,idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                </ul>
                {service.steps && (
                    <>
                        <h3>Dari ide sampai siap digunakan</h3>
                        <ol className="number-list" style={{listStyle:"none", padding: 0}}>
                            {service.steps.map((step,idx) =>(
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>
                    </>
                )}

                <h3>Yang perlu disiapkan</h3>
                <p>{service.need}</p>
                {service.exclude && (
                    <div className="notice mt">{service.exclude}</div>
                )}                        
            </div>

            <aside className="card sidebar">
                <div className="eyebrow lime">Investment overview</div>
                <h3>Mulai dari</h3>
                <div className="display lime mt" style={{fontSize:"40px"}}>
                    {service.price}
                </div>
                <p>{service.unit}</p>
                <div className="summary-row mt">
                    <span>Estimasi durasi</span>
                    <strong>{service.time || "Sesuai kesepakatan"}</strong>
                </div>
                <div className="summary-row">
                    <span>Modal kerja</span>
                    <strong>Scope disepakati di awal</strong>
                </div>

                <Link
                    className="btn mt"
                    to={`/brief?service=${service.id}&plan=starter`}
                >
                    Mulai dengan layanan ini ↗
                </Link>

                <p className="mt" style={{fontSize:"12px"}}>
                    Harga awal bukan tagihan. Kebutuhan dan biaya final dibahas sebelum project dimulai.
                </p>

                <Link
                    className="link"
                    style={{display:"inline-block", marginTop: "20px"}}
                    to="/contact"
                >
                    Tanya dulu ↗
                </Link>
            </aside>
          </div>
        </section>
        <Faq/>
        <CtaBanner/>
        </>
    )
}

