import { Link } from "react-router-dom";
import logo_hara from "../assets/images/hara_logo.png";

export default function Footer(){
    return(
        <footer className="footer" id="footer">
            <div className="wrap">
                <div className="footer-grid">
                    <div>
                        <Link to="/"
                            className="logo"
                            aria-label="Hara, beranda"
                            style={{display:"inline-block", marginBottom:"16px"}}
                        >
                            <img 
                                src={logo_hara} 
                                alt="HARA Creative Agency" 
                                style={{height:'150px', width:"auto", objectFit:"contain"}}
                            />
                        </Link>
                        <p className="mt">
                            Creative &amp; Digital Studio based in Medan. We help brands build, create, and grow.
                        </p>
                        <a 
                            href="https://www.instagram.com/hara.hq/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram @hara.hq
                        </a>
                    </div>
                    <div>
                        <h3>Explore</h3>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/pricing">Pricing</Link>
                    </div>

                    <div>
                        <h3>Let's talk</h3>
                        <Link to="/brief">Mulai Project</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/faq">Faqs</Link>
                    </div>

                    <div>
                        <h3>Our Corner</h3>
                        <p>
                            Medan, Sumatera Utara
                            <br />
                            Senin-Jumat. 08.00-18.00 WIB
                            <br />
                            Sabtu . 09.00-15.00 WIB
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>&copy; 2026 HARA Creative Studio. Build. Create. Grow.</span>
                </div>
            </div>    
        </footer>
    )
}