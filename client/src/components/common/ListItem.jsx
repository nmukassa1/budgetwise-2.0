import BudgetItemView from './BudgetItemView';
import BudgetItemEdit from './BudgetItemEdit';
import { useState } from 'react';

function ListItem({
  item,
  categoryKey,
  removeItem,
  budgetType
}) {

  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const sharedProps = {
    item,
    categoryKey,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    removeItem,
    budgetType
  };



  return (
    <li>
      {editMode && editItemId === item.id ? (
        <BudgetItemEdit
          {...sharedProps}
          defaultName={item.name}
          defaultAmount={item.amount}
        />
      ) : (
        <BudgetItemView {...sharedProps} />
      )}
    </li>
  );
}

export default ListItem;
