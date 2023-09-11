import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import Sobre from "./pages/about/about";
import Ranking from "./pages/hobbies/photos";
import HomePage from "./pages/home";
import Formulario from "../pages/forms/form";

function Rota() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/about" element={<Sobre/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
                <Route path="/forms" element={<Formulario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rota; 