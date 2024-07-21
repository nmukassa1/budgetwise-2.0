// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import FinancialCategory from '../common/FinancialCategory';

const Expenses = () => {

  const debtProps = {
    title: "Debt",
    budgetType: 'debt',
    color: 'red'
  };

  return (
    <FinancialCategory {...debtProps} />
  );
};

export default Expenses;
