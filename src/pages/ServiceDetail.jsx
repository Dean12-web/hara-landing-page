import { useParams, Link, Navigate } from "react-router-dom";
import { servicesData } from "../data/haraData";

export default function ServiceDetail(){
    const {id} = useParams();
    const service = servicesData.find((s) => s.id === id);

    if(!service){
        return <Navigate to="/services" replace/>;
    }

    return (
        <section className="section">
            <div 
                className="wrap"
                style={{maxWidth:'800px'}}
            >
                <Link
                    to="/services"
                    className="link"
                    style={{marginBottom:'1.5rem', display:'inline-block'}} 
                >
                    ← Kembali ke Semua Layanan
                </Link>
                <div className="eyebrow lime">{service.number} / Layanan</div>
                <h1 style={{marginTop:'0.5rem'}}>{service.title}</h1>
                <p className="lead">{service.detailIntro}</p>

                <div 
                    className="card"
                    style={{marginTop:'2rem', padding:'2rem'}}
                >
                    <h3>Deliverables &amp; Lingkup Pekerjaan:</h3>
                    <ul style={{marginTop:'1rem', lineHeight:'1.8'}}>
                        {service.deliverables.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <div style={{marginTop:'2rem', borderTop:'1px solid var(--border, #eee)', paddingTop:'1.5rem'}}>
                        <div className="price">
                            <small>Investasi mulai:</small> {' '}
                            <strong style={{fontSize:'1.4rem'}}>{service.price}</strong>
                            <small>{service.unit}</small>
                        </div>
                        <div className="flow mt">
                            <Link
                                className="btn blue"
                                to={`/brief/?service=${service.id}`}
                            >
                                Mulai Project Ini ↗</Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

