import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);

  // setTotal(setTotalIncomes())

  // const calculateTotal = (incomes, expenses) => {
  //   let total = 0;
  //   let totalIncomes = 0;
  //   let totalExpenses = 0;
  //   if (incomes.length === 0)
  //     totalIncomes = incomes.reduce((sum, item) => {
  //       return sum + item.value;
  //     }, 0);
  //   if (expenses.length === 0)
  //     totalExpenses = expenses.reduce((sum, item) => {
  //       return sum + item.value;
  //     }, 0);

  //   total = totalIncomes - totalExpenses;
  //   return total;
  // };

  const addItem = (data) => {
    if (data.type === "inc") {
      setIncomes((prevState) => {
        return [
          ...prevState,
          {
            description: data.description,
            amount: data.amount,
          },
        ];
      });
    } else {
      setExpenses((prevState) => {
        return [
          ...prevState,
          {
            key: data.id,
            description: data.description,
            amount: data.amount,
          },
        ];
      });
    }
  };

  console.log(`incomes: ${incomes}`);
  console.log(`expenses: ${expenses}`);

  return (
    <div className="App">
      <Header incomes={incomes} expenses={expenses} total={total} />
      <InputForm onSaveData={addItem} />
    </div>
  );
}

export default App;
