// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const savingsProps = {
    title: "Savings",
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    budgetType: 'savings',
    color: 'green'
  };

  return (
    <FinancialCategory {...savingsProps} />
  );
};

export default Expenses;
