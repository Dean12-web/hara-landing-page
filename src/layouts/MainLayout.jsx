import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(){
    return(
        <>
            <a className="skip" href="#main">
                Lewati ke konten
            </a>
            <Navbar>
                <main id="main" tabIndex={-1}>
                    <Outlet/>
                </main>
            </Navbar>
            <Footer />
        </>
    )
}