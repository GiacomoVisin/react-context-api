import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import ProductPage from "./components/ProductPage"
import Page404 from "./components/Page404"
import { useEffect, useState } from "react"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))


  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
            <Route path="chi-siamo" Component={About} />
            <Route path="prodotti" element={<Products products={products}/>} />
            <Route path="prodotti/:id" Component={ProductPage} />
            <Route path="*" Component={Page404} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
