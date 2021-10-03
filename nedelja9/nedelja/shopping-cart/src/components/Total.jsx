const Total = ({ total }) => {
  let tax = 0.15 * total;
  return (
    <div>
      <p>total price: ${total.toFixed(2)} </p>
      <p>tax (15%): ${tax.toFixed(2)} </p>
      <h2>tota inc tax: ${(tax + total).toFixed(2)}</h2>
    </div>
  );
};
export default Total;
