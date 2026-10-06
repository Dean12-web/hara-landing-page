import { Link } from "react-router-dom";
import { pricingPlans, servicesData } from "../data/haraData";
import CtaBanner from "../components/CtaBanner";

export default function Pricing(){
    return(
        <>
            <section className="page-hero">
                <div className="wrap">
                    <div className="crumb">
                        <Link to='/'>Beranda</Link> / Pricing
                    </div>
                    <div className="eyebrow lime">Pricing</div>
                    <h1>Clear expectations. <br /><span className="lime">Better collaborations.</span></h1>
                    <p className="lead">Bandingkan paket social media, atau mulai dari satu layanan. Scope jelas membantu Anda mengambil keputusan.</p>
                </div>
            </section>
            <section className="section cream">
                <div className="wrap">
                    <div className="eyebrow">Social media packages</div>
                    <h2 className="mb">Konsisten dari <br />bulan pertama.</h2>
                    <div className="grid three">
                        {pricingPlans.map((plan) =>(
                            <article key={plan.id} className={`card pricing-card ${plan.featured ? 'featured' : ''}`}>
                                <div className="eyebrow">{plan.badge}</div>
                                <h3 className="display" style={{fontSize:"34px"}}>{plan.title}</h3>
                                <p className="mt">{plan.subtitle}</p>
                                <div className="amount">{plan.price}</div><small>per bulan</small>
                                <ul>
                                    {plan.features && plan.features.map((item,idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <Link className={`btn ${plan.featured ? 'blue' : 'outline'}`} to={`/brief?service=${plan.id}`}>pilih {plan.id} ↗</Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="wrap">
                    <div className="eyebrow lime">Project-based services</div>
                    <h2 className="mb">Butuh yang lebih spesifik?</h2>
                    <div className="grid two">
                        {servicesData.filter((svc) => svc.number !== '01').map((svc) => (
                            <article key={svc.id} className="card service-card wide">
                                <div className="flex between service-number">
                                    <span>{svc.number}</span>
                                    <span>{svc.icon}</span>
                                </div>
                                <h3>{svc.title}</h3>
                                <p>{svc.desc}</p>
                                <div className="price">
                                    <small>Mulai dari</small>
                                    <strong>{svc.price}</strong>
                                    <small>{svc.unit}</small>
                                </div>
                                <Link className="link" to={`/services/${svc.id}`}>
                                    Detail layanan ↗
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <CtaBanner/>
        </>
    )
}
