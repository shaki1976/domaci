import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";
import InputForm from "./components/InputForm";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  let total = 0;
  let totalIncomes = incomes.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  let totalExpenses = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  total = totalIncomes - totalExpenses;

  const addItem = (data) => {
    if (data.type === "inc") {
      setIncomes((prevState) => {
        return [
          ...prevState,
          {
            description: data.description,
            amount: data.amount,
            id: data.id,
          },
        ];
      });
    } else {
      setExpenses((prevState) => {
        return [
          ...prevState,
          {
            id: data.id,
            description: data.description,
            amount: data.amount,
          },
        ];
      });
    }
  };

  return (
    <div className="App">
      <Header
        incomes={incomes}
        expenses={expenses}
        total={total}
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
      />
      <InputForm onSaveData={addItem} />
      <div className="container clearfix">
        <IncomeList incomes={incomes} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
