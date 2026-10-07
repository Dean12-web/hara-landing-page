import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Process from '../components/Process';
import CtaBanner from '../components/CtaBanner';
import { servicesData, pricingPlans, portfolioData } from "../data/haraData";

export default function Home(){
    return (
        <>
            <Hero/>
            <Ticker/>
            {/* Section 01 */}
            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <div>
                            <div className="eyebrow lime">01/ What we do</div>
                            <h2>
                                Ide besar.
                                <br />
                                Eksekusi menyeluruh.
                            </h2>
                        </div>
                        <Link className="link" to="/services">
                            Semua Layanan ↗
                        </Link>
                    </div>
                    <div className="grid five home-services">
                        {servicesData.map((svc)=>(
                            <article key={svc.id} className="card service-card">
                                <div className="flex between service-number">
                                    <span>{svc.number}</span>
                                    <span>{svc.icon}</span>
                                </div>
                                <h3>{svc.title}</h3>
                                <p>{svc.icon}</p>
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
            
            {/* Section 02 */}
            <section className="section cream">
                <div className="wrap">
                    <div className="section-head">
                        <div>
                            <div className="eyebrow">02/ Clear scope. Clear pricing</div>
                            <h2>
                                Pilih langkah
                                <br />
                                pertama Anda.
                            </h2>
                        </div>
                        <p>
                            Mulai dari kebutuhan yang paling penting. Paket social media dengan deliverables yang jelas sejak awal.
                        </p>
                    </div>
                    <div className="grid three">
                        {pricingPlans.map((plan) =>(
                            <article
                                key={plan.id}
                                className={`card pricing-card ${plan.featured ? 'featured' : ''}`}
                            >
                                {plan.ribbon && <span className="ribbon">{plan.ribbon}</span> }
                                <div className="eyebrow">{plan.badge}</div>
                                <h3 className="display" style={{fontSize:'34px'}}>{plan.title}</h3>
                                <p className="mt">{plan.subtitle}</p>
                                <div className="amount">{plan.price}</div>
                                <small className="muted">{plan.period}</small>

                                <ul>
                                    {plan.features.map((feat, idx)=>(
                                        <li key={idx}>{feat}</li>
                                    ))}
                                </ul>
                                <Link
                                    className={plan.featured ? 'btn blue': 'btn outline'}
                                    to={`/brief?service=${plan.serviceId}&plan=${plan.id}`}
                                >
                                    {plan.btnText}
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 03 */}
            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <div>
                            <div className="eyebrow lime">03 / Selected directions</div>
                            <h2>
                                Karya punya
                                <br />
                                ceritanya sendiri.
                            </h2>
                        </div>
                        <Link className="link" to="/portfolio">
                            Semua portfolio ↗
                        </Link>
                    </div>
                    <div className="grid two">
                        {portfolioData.map((item)=>(
                            <Link
                                key={item.id}
                                className="work"
                                to={`/portfolio/${item.id}`}
                            >
                                <div
                                    className={`work-art ${item.artClass}`}
                                    role="img"
                                    aria-label={`Ilustarsi konsep ${item.title}`}
                                >
                                    <div className="mock">
                                        <em>{item.icon}</em>
                                        <b>{item.title.toUpperCase()}</b>
                                        <small>{item.tagline}</small>
                                    </div>
                                    <div className="work-info">
                                       <div>
                                            <span style={{color:"white"}}>{item.subtitle}</span>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <b className="arrow lime">↗</b>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Process/>
            <CtaBanner/>
        </>
    )
}