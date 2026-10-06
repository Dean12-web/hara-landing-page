import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
// import Pricing from "./pages/Pricing";
// import Contact from "./pages/Contact";
// import Brief from "./pages/Brief";
// import NotFound from "./pages/NotFound";

export default function App(){
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>

            {/* Katalog & Detail Layanan */}
            <Route path="services" element={<Services/>}></Route>
            <Route path="services/:id" element={<ServiceDetail/>}></Route>

            {/* Katalog & Detail Portfolio */}
            <Route path="portfolio" element={<Portfolio/>}></Route>
            <Route path="portfolio/:id" element={<PortfolioDetail/>}></Route>

            {/* <Route path="pricing" element={<Pricing/>}></Route> */}
            {/* <Route path="contact" element={<Contact/>}></Route> */}
            {/* <Route path="brief" element={<Brief/>}></Route> */}
        
            {/* <Route path="*" element={<NotFound/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}