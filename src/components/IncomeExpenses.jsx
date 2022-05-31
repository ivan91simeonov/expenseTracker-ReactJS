import { GlobalContext } from '../context/globalState';
import { useContext } from 'react';

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transactions) => transactions.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
