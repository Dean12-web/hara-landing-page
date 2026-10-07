import { Link } from "react-router-dom";
import CtaBanner from "../components/CtaBanner";

export default function Contact(){
    return(
        <>
            <div className="page-hero">
                <div className="wrap">
                    <div className="crumb">
                        <Link to='/'>Beranda</Link> / Kontak
                    </div>
                    <div className="eyebrow lime">Kontak</div>
                    <h1>
                        Let's make <br />
                        <span className="lime">something matter.</span>
                    </h1>
                    <p className="lead">Punya ide, tantangan, atau masih mencari arah? Mulai percakapan dari kebutuhan Anda.</p>
                </div>
            </div>
            <section className="section">
                <div className="wrap grid two">
                    <div>
                        <div className="eyebrow lime">Start here</div>
                        <h2 style={{fontSize:"48px"}}>
                            Dua cara untuk <br />
                            mulai kenalan.
                        </h2>
                        <p className="muted mt">
                            Susun kebutuhan melalui brief project atau buka Whatsapp HARA untuk percakapan langsung.    
                        </p>
                        <div className="flow mt">
                            <Link className="btn" to='/brief'>Susun brief project ↗</Link>
                            <button className="btn outline"onClick={()=>window.open("https://wa.me/+6281375357240","_blank")} >Whatsapp HARA ↗</button>
                        </div>
                        <div className="contact-note">
                            <b>Lebih siap, lebih terarah.</b>
                            <p className="muted" style={{fontSize:"13px", marginTop:"10px"}}>
                                Siapkan gambaran bisnis, layanan yang dibutuhkan, target waktu, dan kisaran anggaran. Belum punya semuanya? Mulai dari ide yang ada.
                            </p>
                        </div>                        
                    </div>
                    <aside className="card">
                        <div className="eyebrow lime">Studio information</div>
                        <h3>Based in Medan. <br />Open for collaboration.</h3>
                        <div className="summary-row mt">
                            <span>Lokasi</span>
                            <strong>Medan, Sumatera Utara</strong>
                        </div>
                        <div className="summary-row">
                            <span>Senin-Jumat</span>
                            <strong>08.00-18.00 WIB</strong>
                        </div>
                        <div className="summary-row">
                            <span>Sabtu</span>
                            <strong>09.00-15.00 WIB </strong>
                        </div>
                        <div className="summary-row">
                            <span>Minggu</span>
                            <strong>Tutup</strong>
                        </div>
                        <Link className="link" to="/faq" style={{display:"inline-block", marginTop:"25px"}}>Baca pertanyaan umum ↗</Link>
                    </aside>
                </div>
            </section>
            <CtaBanner/>
        </>
    )
}