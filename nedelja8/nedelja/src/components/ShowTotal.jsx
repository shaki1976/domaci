import "./ShowTotal.css";

const ShowTotal = ({ total }) => {
  if (total > 0) return <div className="budget__value">+{total}</div>;
  return <div className="budget__value">{total}</div>;
};
export default ShowTotal;
