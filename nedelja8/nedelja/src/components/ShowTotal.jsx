const ShowTotal = ({ total }) => {
  if (total > 0) return <div>+{total}</div>;
  return <div>{total}</div>;
};
export default ShowTotal;
