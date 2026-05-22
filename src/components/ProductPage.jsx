import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
export default function ProductPage() {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const api = `https://fakestoreapi.com/products/${id}`



    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    navigate(-1);
                    return;
                }

                setItem(data);
                setLoading(false)
            })
            .catch(() => {
                navigate(-1);
            });
    }, [api, navigate]);

    if (loading) {
        return <h2>Caricamento prodotto...</h2>;
    }

    const Next = () => {
        navigate(`/prodotti/${Number(id) + 1}`);
    };
    const Prev = () => {
        navigate(`/prodotti/${Number(id) - 1}`);
    };

    return (

        <div className="container">
            <div className="card center p-3" style={{ minHeight: "800px", maxHeight: "2000px" ,width: "500px" }} >
                <img src={item.image} alt={item.description} style={{ width: "300px" }} className="mb-2 center" />
                <p> <strong>Category: </strong>{item.category} </p>
                <p> <strong>Title: </strong>{item.title} </p>
                <p> <strong>Price: </strong> {item.price} $ </p>
                <p> <strong>Description: </strong> {item.description} $ </p>
                <hr />
                <p> <strong>Rating: </strong> {item?.rating?.rate}⭐  <strong>Count: </strong> {item?.rating?.count}</p>
                <hr />
                <button className="mb-2" onClick={Next}> next </button>
                <button onClick={Prev}> Prev </button>

            </div>

        </div>
    )
}