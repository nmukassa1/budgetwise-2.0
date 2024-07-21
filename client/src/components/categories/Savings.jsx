// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import FinancialCategory from '../common/FinancialCategory';

const Expenses = () => {

  const savingsProps = {
    title: "Savings",
    budgetType: 'savings',
    color: 'green'
  };

  return (
    <FinancialCategory {...savingsProps} />
  );
};

export default Expenses;
