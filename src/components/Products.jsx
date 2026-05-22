import { Link } from "react-router-dom"
import ProductPage from "./ProductPage"
import Card from "./Card"
import { useContext } from "react"
import { BudgetContext } from "../assets/contexts/BudgetProvider"


export default function Products({ products }) {


    const { budgetMode } = useContext(BudgetContext)

    const filteredProducts = budgetMode
        ? products.filter(product => product.price <= 30)
        : products

    return (
        <>
            <h1>Prodotti</h1>

            <div className="container">
                <div className="row">
                    {filteredProducts.map((item) => (
                        <div className="col col-lg-4 col-md-4 " key={item.id}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}