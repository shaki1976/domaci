import { React, useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import { getAllProducts } from "./service";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
getAllProducts().then((res) => {
  // console.log(res)
  setProducts(res.data);
})
  }, [])

  return <div className="App">
    <h2>add new product</h2>
    <br />
    <ProductForm setProducts={setProducts} />
  </div>;
}

export default App;
