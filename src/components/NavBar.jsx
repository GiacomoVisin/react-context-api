import { NavLink } from "react-router-dom"


export default function NavBar() {

    return (
        <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
            <NavLink to="/" className="navlink"> Home </NavLink>

            <NavLink to="/chi-siamo" className="navlink"> Chi Siamo</NavLink>

            <NavLink to="/prodotti" className="navlink"> Prodotti </NavLink>
        </nav>
    );
}