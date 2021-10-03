import { useState } from "react";
import { addProduct } from "../service";

const ProductForm = ({ setProducts, products }) => {
  const [inputedName, setInputedName] = useState("");
  const [inputedPrice, setInputedPrice] = useState(0);
  const [inputedInfo, setInputedInfo] = useState("");

  return (
    <div>
      <form>
        <p>name:</p>
        <input
          type="text"
          required
          placeholder="e.g.)snickers 50g"
          onChange={(e) => {
            let inVal = e.target.value;
            if (!inVal.trim()) return;
            setInputedName(inVal);
          }}
        />
        <p>price:</p>
        <input
          type="number"
          required
          value={inputedPrice}
          min="0.01"
          step="0.01"
          placeholder="e.g.)53.99"
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) {
              e.target.value = 0;
            }
            setInputedPrice(e.target.value);
          }}
        />
        <p>info:</p>
        <input
          type="text"
          required
          placeholder="e.g.)candy"
          onChange={(e) => {
            setInputedInfo(e.target.value);
          }}
        />
        <div>
          <button
            onClick={(e) => {
              if (!inputedName || inputedPrice <= 0 || !inputedInfo) return;
              //iz nekog razloga kada stavim ovo ne snima nista
              if (
                products.filter((inputedName) => products.name === inputedName)
                  .length > 0
              )
                return;

              const prod = {
                name: inputedName,
                info: inputedInfo,
                price: "$" + inputedPrice,
              };

              addProduct(prod).then((res) => {
                setProducts((prev) => {
                  return [...prev, res.data];
                });
              });
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProductForm;
