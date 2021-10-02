import { useState } from "react";

const ProductForm = ({setProducts}) => {
  const [inputedName, setInputedName] = useState("");
  const [inputedPrice, setInputedPrice] = useState(0);
  const [inputedInfo, setInputedInfo] = useState("");

  return (
    <div>
      <form>
        <p>name:</p>
        <input
          type="text"
          placeholder="e.g.)snickers 50g"
          onChange={(e) => {
            setInputedName(e.target.value);
          }}
        />
        <p>price:</p>
        <input type="number" min="0.01" step="0.01" placeholder="e.g.)53.99" onChange={
          (e) => {
            setInputedPrice(Number(e.target.value))
          }
        } />
        <p>info:</p>
        <input type="text" placeholder="e.g.)candy" onChange={
          (e) => {
            setInputedInfo(e.target.value)
          }
        } />
        <div><button onClick={
          (e) => {
            setProducts((prev) => {
              const prod = {
                name: inputedName,
                info: inputedInfo,
                price: inputedPrice
              }
              return [...prev, prod]
            })
          }
        } >Submit</button></div>
      </form>
    </div>
  );
};
export default ProductForm;
