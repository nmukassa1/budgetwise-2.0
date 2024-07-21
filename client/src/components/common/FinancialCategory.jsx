import React, { useEffect, useRef, useState } from 'react';
import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import List from './List';
import AddCategory from './AddCategory';

function FinancialCategory({
  title,
  addItem,
  removeItem,
  setEditItemId,
  color,
  budgetType
}) {
  const budgetListRef = useRef();

  const sharedProps = {
    budgetListRef,
    setEditItemId,
    addItem,
    removeItem,
    budgetType
  };

 

  return (
    <BudgetContainer>
      <HeaderContainer {...sharedProps} title={title} color={color} />
      <List {...sharedProps} />
      <AddCategory {...sharedProps} />
    </BudgetContainer>
  );
}

export default FinancialCategory;
