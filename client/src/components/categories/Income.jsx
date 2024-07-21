// src/components/Income.jsx
import React, { useContext, useEffect, useState } from 'react';
import FinancialCategory from '../common/FinancialCategory';

const Income = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const incomeProps = {
    title: "Income",
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    color: 'green',
    budgetType: 'income'
  };


  return (
    <FinancialCategory {...incomeProps} />
  )
};

export default Income;
