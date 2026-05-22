import { Link } from "react-router-dom"

export default function Page404() {

    return (
        <div className="container">

            <h1> ERROR 404 , PAGE NOT FOUND</h1>
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" > Clicca qui per tornare al motore di ricerca</Link>
        </div>
    )
}