import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <section className="hero">
            <div className="wrap hero-inner">
                <div>
                    <div className="eyebrow lime">Independent creative &amp; digital studio</div>
                    <h1>
                        Creative<span>Agency.</span>
                    </h1>
                    <p className="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit aliquam iusto similique deserunt aliquid saepe voluptatem quasi cumque ut delectus!
                    </p>
                    <div className="flow mt">
                        <Link className="btn" to="/services">
                            Temukan layanan ↗
                        </Link>
                        <Link className="btn outline" to="/portfolio">
                            Jelajahi karya
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div>
                            <strong>5 layanan</strong>Satu partner kreatif
                        </div>
                        <div>
                            <strong>Dari Rp750rb</strong>Scope yang transparan
                        </div>
                        <div>
                            <strong>Medan &amp; beyond</strong>Kolaborasi tanpa jarak
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="photo-frame">
                        <img 
                            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80" 
                            alt="Suasana studio produksi kreatif" 
                            loading="eager"
                        />
                    </div>
                    <div className="sticker">
                        <b>↗</b>SMALL STUDIO.
                        <br />
                        BIG ENERGY.
                    </div>
                    <div className="visual-type display">
                        Make it.<span>Mean it.</span>
                    </div>
                    <div className="caption">
                        <span>+ HARA STUDIO</span> &nbsp; Ideas into impact.
                    </div>
                </div>
            </div>
        </section>
    )
}