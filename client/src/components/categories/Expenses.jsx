// src/components/Expenses.jsx
import React, { useState } from 'react';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const expensesProps = {
    title: "Expenses",
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    color: 'red',
    budgetType: 'expenses',
  };

  return (
    <FinancialCategory {...expensesProps}  />
  );
};

export default Expenses;
