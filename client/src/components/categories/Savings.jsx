// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import FinancialCategory from '../common/FinancialCategory';
import FinanceCard from '../dashboard/FinanceCard';

const Savings = () => {

  const savingsProps = {
    title: "Savings",
    budgetType: 'savings',
    color: 'green'
  };

  return (
    <FinanceCard name='savings' isGoal={true} />
  );
};

export default Savings;
