import React, { createContext, useRef, useState } from 'react';

const FinancialCategoryContext = createContext();

function FinancialCategoryProvider({ children }){
  const budgetListRef = useRef();

  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const value = {
    budgetListRef,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
  };

  return (
    <FinancialCategoryContext.Provider value={value}>
      {children}
    </FinancialCategoryContext.Provider>
  );
};

export {FinancialCategoryProvider, FinancialCategoryContext}