import BudgetItemView from './BudgetItemView';
import BudgetItemEdit from './BudgetItemEdit';
import useEditMode from '../../hooks/useEditMode';

function ListItem({
  item,
  budgetType
}) {


  const {editMode, editItemId} = useEditMode()

  const sharedProps = {
    item,
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
