import Income from "./Income";
import Expense from "./Expense";
import Percentage from "./Percentage";
import ShowTotal from "./ShowTotal";
import { useState } from "react";
import ShowDate from "./ShowDate";

const Header = (props) => {
  let date = new Date();

  return (
    <div>
      <ShowDate date={date}></ShowDate>
      <ShowTotal total={props.total}></ShowTotal>
    </div>
  );
};

export default Header;
