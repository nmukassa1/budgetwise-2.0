import React, { useEffect } from 'react';
import DefaultItemElement from './DefaultItemElement';
import EditItemElement from './EditItemElement';

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
        <EditItemElement
          {...sharedProps}
          defaultName={item.name}
          defaultAmount={item.amount}
        />
      ) : (
        <DefaultItemElement {...sharedProps} />
      )}
    </li>
  );
}

export default ListItem;
