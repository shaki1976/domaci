import { useState } from "react";

const Product = ({ product, setTotal }) => {
  const [quantity, setQuantity] = useState(0);
  const [toggleShowInfo, setToggleShowInfo] = useState(false);

  // konvertujem cenu iz baze u broj
  let price = product.price;
  while (price.charAt(0) === "$") {
    price = price.substring(1);
  }
  price = Number(price);

  const showInfoHandler = () => {
    if (toggleShowInfo) setToggleShowInfo(false);
    else setToggleShowInfo(true);
  };

  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
    setTotal((prev) => prev + price);
  };

  const decreaseQuantityHandler = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      setTotal((prev) => prev - price);
    } else return;
  };

  return (
    <div>
      <hr />
      <div>
        <p>
          {product.name}: {product.price}{" "}
        </p>
      </div>
      <div>
        <p>qty: {quantity} </p>
        <div>
          <button onClick={showInfoHandler}>show info</button>
          <div>{toggleShowInfo ? product.info : ""}</div>
        </div>
        <div>
          <button onClick={increaseQuantityHandler}>+</button>
          <button onClick={decreaseQuantityHandler}>-</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
