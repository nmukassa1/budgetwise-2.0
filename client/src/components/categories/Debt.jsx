// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const debtProps = {
    title: "Debt",
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    budgetType: 'debt',
    color: 'red'
  };

  return (
    <FinancialCategory {...debtProps} />
  );
};

export default Expenses;
