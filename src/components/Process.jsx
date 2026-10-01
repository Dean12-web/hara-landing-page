import { Link } from "react-router-dom";
import { processSteps } from "../data/haraData";

export default function Process(){
    return(
        <section className="section cream">
            <div className="wrap">
                <div className="section-head">
                    <div>
                        <div className="eyebrow">04 / How We Work</div>
                        <h2>
                            Kolaborasi
                            <br />
                            Tanpa tebak-tebakan.
                        </h2>
                    </div>
                    <Link className="link" to="/about">
                        Kenali HARA ↗
                    </Link>
                </div>
                <div 
                    className="grid"
                    style={{gridTemplateColumns: 'repeat(auto-fit,minmax(210px, 1fr)'}}
                >
                    {processSteps.map((step) => (
                        <div className="process-card">
                            <b>{step.number}</b>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}