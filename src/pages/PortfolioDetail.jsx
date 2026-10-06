import { useParams, Link, Navigate } from "react-router-dom";
import { portfolioData } from "../data/haraData";
import CtaBanner from "../components/CtaBanner";

export default function PortfolioDetail(){
    const {id} = useParams();
    
    const currentIndex = portfolioData.findIndex((p) => p.id === id);
    const work = portfolioData[currentIndex];

    if(!work){
        return <Navigate to="/portfolio" replace/>;
    }

    const nextWork = portfolioData[(currentIndex + 1) % portfolioData.length];

    return (
        <>
            <div className="page-hero">
                <div className="wrap">
                    <div className="crumb">
                        <Link to="/">Beranda</Link> /
                        <Link to="/portfolio"> Portofolio</Link> /
                        {" "} {work.title}
                    </div>
                    <div className="eyebrow lime">Case studt / Concept showcase</div>
                    <h1>{work.title}</h1>
                    <p className="lead">{work.desc}</p>
                </div>
            </div>
            <section className="section">
                <div className="wrap">
                    <div
                        className={`work-art ${work.artClass} large`} 
                        role="img"
                        aria-label={`Ilustrasi konsep ${work.title}`}
                    >
                        <div className="mock">
                            <em>{work.icon}</em>
                            <b>
                            {work.mark ? (
                                work.mark.split("\n").map((line,i) => (
                                    <span key={i}>{line} <br /></span>
                                ))
                            ): (
                                work.title
                            )}
                            </b>
                            <small>{work.tagline}</small>
                        </div>
                    </div>
                    <div className="split mt-lg">
                        <div className="detail-text">
                            <div className="eyebrow lime">O1 / The challenge</div>
                            <h2>Temukan inti ceritanya.</h2>
                            <p>{work.challenge}</p>

                            <div className="eyebrow lime mt-lg">02 / Creative approach</div>
                            <h2>Arah yang lebih jelas.</h2>
                            <p>{work.idea}</p>

                            <div className="eyebrow lime mt-lg">03 / Concept deliverables</div>
                            <ul className="checklist">
                                {work.outputs && work.outputs.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <aside className="card sidebar">
                            <div className="eyebrow lime">Project overview</div>
                            <div className="summary-row">
                                <span>Project</span>
                                <strong>{work.title}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Kategori</span>
                                <strong>{work.category}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Jenis Tampilan</span>
                                <strong>Konse showcase</strong>
                            </div>

                            <p className="mt">Punya kebutuhan serupa?</p>
                           <Link
                                className="btn mt"
                                to={`/brief?service=${work.serviceId || ""}`}
                            >
                                Diskusikan project ↗
                            </Link>
                            <Link
                                className="link"
                                to={`/services/${work.serviceId || ""}`}
                                style={{ display: "block", marginTop: "22px" }}
                            >
                                Tentang layanan ini ↗
                            </Link>
                        </aside>
                        {nextWork && (
                                <div className="mt-lg"
                                    style={{borderTop:"1px solid var(--line)", paddingTop: "35px"}}
                                >
                                    <p className="eyebrow lime">Next story</p>
                                    <Link to={`/portfolio/${nextWork.id}`}>
                                        <h2>{nextWork.title} ↗</h2>
                                    </Link>
                                </div>
                        )}
                    </div>
                </div>
            </section>
            <CtaBanner/>
        </>
    )
}