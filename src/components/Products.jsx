import Card from "./Card"
import { useContext } from "react"
import { BudgetContext } from "../assets/contexts/BudgetProvider"

export default function Products({ products }) {

    const { maxPrice } = useContext(BudgetContext)

    const filteredProducts =
        maxPrice === null
            ? products
            : products.filter(product => product.price <= maxPrice)

    return (
        <>
            <h1>Prodotti</h1>

            <div className="container">
                <div className="row">

                    {filteredProducts.map((item) => (

                        <div className="col col-lg-4 col-md-4" key={item.id}>
                            <Card item={item} />
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}