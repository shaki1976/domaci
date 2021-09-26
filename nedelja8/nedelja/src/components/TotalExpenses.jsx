import Percentage from "./Percentage";
import "./TotalExpenses.css";

const TotalExpenses = ({ totalExpenses, totalIncomes }) => {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Rashodi</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">- {totalExpenses}</div>
        <div className="budget__expenses--percentage">
          {console.log(typeof totalIncomes)}
          <Percentage
            totalExpenses={totalExpenses}
            totalIncomes={totalIncomes}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalExpenses;
