import { Link } from "react-router-dom"
import { serviceFaqs } from "../data/haraData"
import CtaBanner from "../components/CtaBanner"


export default function Faq(){
    return (
        <>
            <section className="page-hero">
                <div className="wrap">
                    <div className="crumb">
                        <Link to='/'> Beranda</Link> / Faq
                    </div>
                    <div className="eyebrow lime">FAQ</div>
                    <h1>Good questions. <br /><span className="lime">Clear answers.</span></h1>
                    <p className="lead">Hal-hal yang perlu diketahui sebelum kita mulai bekerjasama.</p>
                </div>
            </section>
            <section className="section">
                <div className="wrap center">
                    <div className="faq">
                        {serviceFaqs && serviceFaqs.map((faq, idx) => (
                            <details key={idx}>
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
            <CtaBanner/>
        </>
    )
}