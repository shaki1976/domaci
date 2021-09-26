import IncomeItem from "./IncomeItem";
import "./IncomeList.css";

const IncomeList = ({ incomes }) => {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {incomes.map((income) => (
          <IncomeItem
            key={income.id}
            description={income.description}
            amount={income.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
