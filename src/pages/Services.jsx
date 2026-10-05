import { Link } from "react-router-dom";
import { servicesData } from "../data/haraData";
import CtaBanner from "../components/CtaBanner";


export default function Services(){
    return(
        <>
       <section className="page-hero">
            <div className="wrap">
                <div className="crumb">
                    <Link to="/">Beranda</Link> / Layanan kami
                </div>
                <div className="eyebrow lime">Layanan kami</div>
                <h1>Your next move. <br /><span className="lime">Our creative toolkit.</span></h1>
                <p className="lead">Lima layanan yang saling melengkapi. Mulai dari satu kebutuhan atau bangun ekosistem brand Anda bersama kami.ß</p>
            </div>
        </section>
        <section className="section">
            <div className="wrap grid three">
                {servicesData.map((svc) => (
                     <article key={svc.id} className="card service-card wide">
                            <div className="flex between service-number"><span>{svc.number}</span><span>{svc.icon}</span></div>
                            <h3>{svc.title}</h3>
                            <p>{svc.desc}</p>
                            <div className="price">
                                <small>Mulai dari</small>
                                <strong>{svc.price}</strong>
                                <small>/ bulan</small>
                            </div>
                            <Link className="link" to={`/services/${svc.id}`}>
                                Detail layanan ↗
                            </Link>
                    </article>
                ))}
                <article className="card" style={{background:"var(--blue)"}}>
                    <div className="eyebrow lime">Built around you</div>
                    <h3>Butuh kombinasi <br />layanan?</h3>
                    <p className="mt" style={{color:"#d6d8ef"}}>Ceritakan tantangan bisnis Anda. Kita tentukan scope yang paling masuk akal.</p>
                    <Link className="btn mt" to={"/brief"}>
                        Buat brief custom ↗
                    </Link>
                </article>
               
            </div>
        </section>
        <CtaBanner/>
        </>

        
    )
}