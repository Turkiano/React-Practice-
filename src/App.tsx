import { useState } from 'react';
import './App.css';
import { IncomeForm } from './Components/IncomeForm';

function App() {
  type income = {
    source: string,
    amount: number,
    date: string
  }
  const [incomes, setIncomes] = useState<income []>([]);

  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  // const [date, setDat] = useState(null);

  const handelChangeSource = (e) => {
    const value = e.target.value;
    setSource(value);
  };

  const handelChangeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      source: source,
      amount: amount,
      date: new Date().toLocaleDateString(),
    };
    setIncomes([...incomes, newIncome]);
    console.log('incomes: ', newIncome);
  };

  return (
    <div className="App">
      <h1>Budget App</h1>
      <IncomeForm
        handelChangeAmount = {handelChangeAmount}
        handelChangeSource={handelChangeSource}
        handelSubmit={handelSubmit}
        
      />

      <ul>
        {incomes.map((income) => {
          return (
           <li>
            <span>{income.source}</span>
            <span>{income.amount}</span>
            <span>{income.date}</span>
           </li>

          );
        })}
      </ul>

    </div>
  );
}

export default App;
