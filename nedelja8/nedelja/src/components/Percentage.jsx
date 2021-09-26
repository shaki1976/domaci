const Percentage = (props) => {
  let percentage = (props.totalExpenses / props.totalIncomes) * 100;
  return <>{percentage}%</>;
};

export default Percentage;
