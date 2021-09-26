import ExpenseItem from "./ExpenseItem";
import "./IncomeList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expense</h2>
      <div className="expenses__list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            description={expense.description}
            amount={expense.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
