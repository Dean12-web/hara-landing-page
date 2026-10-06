import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <section 
            className="section"
            style={{minHeight:'60vh', display: 'flex', alignItems: 'center'}}
        >
            <div 
                className="wrap"
                style={{textAlign:'center',margin:'auto'}}
            >
                <div className="eyebrow lime">404 Error</div>
                <h1 style={{fontSize:'4rem', margin:'1rem 0'}}>Halaman Tidak Ditemukan</h1>
                <p className="lead">Tautan yang Anda tuju mungkin salah ketik atau telah dipindahkan.</p>
                <div className="mt">
                    <Link to="/" className="btn blue">
                        Kembali ke Beranda↗
                    </Link>
                </div>

            </div>
        </section>
    )
}