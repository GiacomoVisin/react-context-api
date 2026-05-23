import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { BudgetContext } from "../assets/contexts/BudgetProvider"

export default function NavBar() {

    const { maxPrice, setMaxPrice } = useContext(BudgetContext)

    return (

        <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>

            <NavLink to="/" className="navlink">Home</NavLink>

            <NavLink to="/chi-siamo" className="navlink">Chi Siamo</NavLink>

            <NavLink to="/prodotti" className="navlink">Prodotti</NavLink>

            <input
                type="number"
                placeholder="Prezzo massimo"
                value={maxPrice ?? ""}
                onChange={(e) =>
                    setMaxPrice( e.target.value === ""? null: Number(e.target.value)   )  } />

        </nav>
    )
}