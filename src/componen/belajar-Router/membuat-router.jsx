import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loging from "../loging";
import Category from "./category";
import Halaman2 from "./link-route";
import Componenbrita from "../membuat-search-api.jsx/search";

function BelajarRoute() {
    return (
        <div>
            <BrowserRouter>
                <Halaman2 />
                <Routes>
                    <Route path="/Componenbrita" element={<Componenbrita />} />
                    <Route path="/Loging" element={<Loging />} />
                    <Route path="/category/:name" element={<Category />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default BelajarRoute;