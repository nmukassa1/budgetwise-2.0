import React, { useEffect } from 'react';
import { useUserContext } from '../../userData/UserContext';

const Balance = () => {
  const { userBudget } = useUserContext()
  const { income, expenses, debt, savings } = userBudget;

  function add(budget){
    //item.depsoit is used for the savings table
    //item.amount is used for the other tables
    return budget.reduce((acc, item) => acc + Number(item.deposit || item.amount), 0)
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
