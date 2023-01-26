import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css"

const ExpenseItem = (props) => {

 const [title ,setTitle] = useState(props.title);


  const clickHandler = () => {
 setTitle("updated")
 console.log(title)
  }

  return (
    <>
     <div className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>change</button>
     </div>
    </>
  );
};

export default ExpenseItem;
