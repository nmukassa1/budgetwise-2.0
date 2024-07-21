// src/components/Expenses.jsx
import React, { useState } from 'react';
import FinancialCategory from '../common/FinancialCategory';

const Expenses = () => {
  // const [editMode, setEditMode] = useState(null);
  // const [editItemId, setEditItemId] = useState(null);

  const expensesProps = {
    title: "Expenses",
    color: 'red',
    budgetType: 'expenses',
  };

  return (
    <FinancialCategory {...expensesProps}  />
  );
};

export default Expenses;
