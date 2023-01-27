import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {

    const onBottomupDataHandler =(enteredexpensedata) =>{
      const expensedata={
        ...enteredexpensedata,
        id: Math.random().toString(),
      };
      props.onAddExpense(expensedata)
    }

  return (
    <div className='new-expense'>
      <ExpenseForm onBottomupData={onBottomupDataHandler}/>
    </div>
  )
}

export default NewExpense
