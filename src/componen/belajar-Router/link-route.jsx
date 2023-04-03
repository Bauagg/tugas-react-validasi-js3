import { Link, Outlet } from "react-router-dom";

import "./roote.css";



const Halaman2 = () => {
    return (
        <div className="mr">
            <h1>belajar react Route</h1>
            <nav>
                <Link to="Componenbrita" className="ms">Brita</Link>
                <Link to="Loging" className="ms">Daftar</Link>
                <Link to="Category/Foot" className="ms">Food</Link>
                <Link to="Category/Drink" className="ms">Drink</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Halaman2; 