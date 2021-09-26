import { useState } from "react";
import { Checkmark } from "react-checkmark";
import { v4 as uuidv4 } from "uuid";
import "./InputForm.css";

const InputForm = (props) => {
  const [selectedType, setSelectedType] = useState("inc");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const selectTypeHandler = (event) => {
    setSelectedType(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const btnClickHandler = () => {
    const item = {
      id: uuidv4(),
      type: selectedType,
      description: enteredDescription,
      amount: enteredAmount,
    };
    props.onSaveData(item);
  };

  return (
    <div className="add">
      <div className="add__container">
        <select className="add__type" onChange={selectTypeHandler}>
          <option className="inc">+</option>
          <option className="exp">-</option>
        </select>
        <input
          type="text"
          className="add__description"
          placeholder="Opis"
          onChange={descriptionChangeHandler}
        />
        <input
          type="number"
          className="add__value"
          placeholder="Iznos"
          min="0.01"
          step="0.01"
          onChange={amountHandler}
        />
        <button className="add__btn" onClick={btnClickHandler}>
          <Checkmark className="checkmark" size="small" />
        </button>
      </div>
    </div>
  );
};

export default InputForm;
