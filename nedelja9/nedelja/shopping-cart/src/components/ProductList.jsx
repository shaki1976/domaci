import Product from "./Product";

const ProductList = ({ products, setTotal }) => {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} setTotal={setTotal} />
          );
        })}
      </ul>
      <hr />
    </div>
  );
};
export default ProductList;
