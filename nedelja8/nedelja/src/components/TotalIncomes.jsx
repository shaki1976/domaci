import "./TotalIncomes.css";

const TotalIncomes = ({ totalIncomes }) => {
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Prihodi</div>
      <div className="right">
        <div className="budget__income--value">+ {totalIncomes}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
};

export default TotalIncomes;
