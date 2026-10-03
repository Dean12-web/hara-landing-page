import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";


// Pages
import Home from "./pages/Home";


export default function App(){
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}