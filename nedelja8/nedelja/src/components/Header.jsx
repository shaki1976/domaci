// import Income from "./Income";
// import Expense from "./Expense";
// import Percentage from "./Percentage";
import ShowTotal from "./ShowTotal";
// import { useState } from "react";
import ShowDate from "./ShowDate";
import "./Header.css";
import TotalIncomes from "./TotalIncomes";
import TotalExpenses from "./TotalExpenses";

const Header = (props) => {
  let date = new Date();

  return (
    <div className="top">
      <div className="budget">
        <ShowDate date={date}></ShowDate>
        <ShowTotal total={props.total}></ShowTotal>
        <TotalIncomes totalIncomes={props.totalIncomes} />
        <TotalExpenses
          totalExpenses={props.totalExpenses}
          totalIncomes={props.totalIncomes}
        />
      </div>
    </div>
  );
};

export default Header;
