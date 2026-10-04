import Process from "../components/Process";
import CtaBanner from "../components/CtaBanner";

export default function About(){
    return (
        <>
            <section className="section">
                <div className="wrap" style={{maxWidth: '800px'}}>
                    <div className="eyebrow lime">Tentang Kami</div>
                    <h1 style={{marginTop:'0.5rem'}}>Ide Berani. Eksekusi Berarah</h1>
                    <p className="lead">
                        HARA adalah independent creative &amp; digital yang berbasis di Medan. Kami membantu brand bertumbuh melalui strategi visual, konten autentik, dan solusi teknologi modern.
                    </p>
                </div>
            </section>
            <Process/>
            <CtaBanner/>
        </>
    )
}