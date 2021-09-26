import { VscClose } from "react-icons/vsc";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="item clearfix">
      <div className="item__description">{props.description}</div>
      <div className="right clearfix">
        <div className="item__value">- {props.amount}</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <VscClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
