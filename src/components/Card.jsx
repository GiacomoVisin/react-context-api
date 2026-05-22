import { Link } from "react-router-dom"
export default function Card({ item }) {

    return (
        <div className="card p-3 mb-3">
            <img src={item.image} alt={item.description} style={{ height: "300px" }} />
            <p> <strong>Title: </strong>{item.title} </p>
            <p> <strong>Price: </strong> {item.price} $ </p>
            <Link className="link" to={`/prodotti/${item.id}`}> More...</Link>
        </div>
    )
}