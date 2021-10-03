import { React, useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { getAllProducts } from "./service";
import Total from "./components/Total";

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAllProducts().then((res) => {
      // console.log(res)
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h2>add new product</h2>
      <br />
      <ProductForm setProducts={setProducts} products={products} />
      <ProductList products={products} setTotal={setTotal} />
      <Total total={total} />
    </div>
  );
}

export default App;
