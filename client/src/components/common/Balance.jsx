import React, { useEffect } from 'react';
import { useUserContext } from '../../userData/UserContext';

const Balance = () => {
  const { userBudget } = useUserContext()
  const { income, expenses, debt, savings } = userBudget;

  function add(budget){
    return budget.reduce((acc, item) => acc + Number(item.amount), 0)
  }

  const totalIncome = add(income)
  const totalExpenses = add(expenses)
  const totalDebt = add(debt)
  const totalSavings = add(savings)

  const balance = (totalIncome - totalExpenses - totalDebt - totalSavings).toLocaleString('en-UK', {style: 'currency', currency: 'GBP'});

  return (
    <div className='balance'>
      <h3>Balance <span>{balance}</span></h3>
    </div>
  );
};

export default Balance;
