import { Link } from "react-router-dom";

export default function CtaBanner(){
    return(
        <section className="cta">
            <div className="wrap">
                <div>
                    <div className="eyebrow lime">
                        Good things start with a conversation
                    </div>
                    <h2>
                        Ide Anda.
                        <br />
                        <span className="lime">Langkah berikutnya.</span>
                    </h2>
                </div>
                <Link className="btn dark" to="/brief">
                    Ceritakan project Anda ↗
                </Link>
            </div>
        </section>
    )
}