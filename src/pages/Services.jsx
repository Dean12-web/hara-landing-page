import { Link } from "react-router-dom";
import { servicesData } from "../data/haraData";

export default function Services(){
    return(
        <section className="section">
            <div className="wrap">
                <div className="section-head">
                    <div>
                        <div className="eyebrow lime">Layanan Kami</div>
                        <h2>Layanan Kreatif &amp; Solusi Digital</h2>
                    </div>
                    <p>
                        Pendekatan terpadu untuk membangun dan menumbuhkan brand Anda di era digital.
                    </p>
                </div>
                <div className="griv five">
                    {servicesData.map((svc) => (
                        <article key={svc.id}
                            className="card service-card"
                        >
                            <div className="flex between service-number">
                                <span>{svc.number}</span>
                                <span>{svc.icon}</span>
                            </div>
                            <h3>{svc.title}</h3>
                            <p>{svc.desc}</p>
                            <div className="price">
                                <small>Mulai dari</small>
                                <strong>{svc.price}</strong>
                                <strong>{svc.unit}</strong>
                            </div>
                            <Link className="link" to={`/services/${svc.id}`}>
                                Detail layanan ↗
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}