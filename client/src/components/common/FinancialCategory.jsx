import React, { useEffect, useRef, useState } from 'react';
import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import List from './List';
import AddCategory from './AddCategory';
import { EditModeProvider } from '../../hooks/useEditMode';

function FinancialCategory({
  title,
  color,
  budgetType
}) {
  const budgetListRef = useRef();

  const sharedProps = {
    budgetListRef,
    budgetType
  };

 

  return (
    <BudgetContainer>
      <HeaderContainer {...sharedProps} title={title} color={color} />
      <EditModeProvider>
        <List {...sharedProps} />
        <AddCategory {...sharedProps} />
      </EditModeProvider>
    </BudgetContainer>
  );
}

export default FinancialCategory;
