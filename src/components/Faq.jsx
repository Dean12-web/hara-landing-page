import { serviceFaqs } from "../data/haraData"

export default function Faq(){
    return (
        <section className="section cream">
            <div className="wrap">
                <div className="eyebrow">Frequently asked questions</div>
                <h2 className="mb">Sebelum mulai.</h2>
                <div className="faq">
                    {(serviceFaqs || []).map((faq, idx) => (
                        <details key={idx} >
                            <summary>{faq.q}</summary>
                            <p>{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}