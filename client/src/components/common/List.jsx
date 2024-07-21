import ListItem from "./ListItem";
import { useUserContext } from '../../userData/UserContext';

function List({
  categoryKey,
  editMode,
  setEditMode,
  editItemId,
  setEditItemId,
  budgetListRef,
  budgetType
}) {
  const {userBudget} = useUserContext()

  const sharedProps = {
    categoryKey,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    budgetType
  };



  return (
    <ul className="budget-list" ref={budgetListRef}>
      {userBudget[budgetType].map((item) => (
        <ListItem key={item.id} item={item} {...sharedProps} />
      ))}
    </ul>
  );
}

export default List;
