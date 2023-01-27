
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "gasoline", amount: 5000, date: new Date(2020, 7, 14) },
    { title: "food", amount: 15000, date: new Date(2021, 8, 12) },
    { title: "recreation", amount: 3000, date: new Date(2022, 6, 30) },
    { title: "learning", amount: 6000, date: new Date(2023, 9, 10) },
  ];

  const AddExpenseHandler = (expense)=>{
    console.log(expense)
  }

  return (
    <>
    <NewExpense onAddExpense = {AddExpenseHandler}/>
  <Expenses items={expenses}/>
    </>
  );
}

export default App;
