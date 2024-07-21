import BudgetItemView from './BudgetItemView';
import BudgetItemEdit from './BudgetItemEdit';

function ListItem({
  item,
  categoryKey,
  editMode,
  setEditMode,
  removeItem,
  editItemId,
  setEditItemId, 
  budgetType
}) {
  const sharedProps = {
    item,
    categoryKey,
    editMode,
    setEditMode,
    removeItem,
    editItemId,
    setEditItemId,
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
