import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../userData/UserContext';

function AddCategory({ 
    addItem,
    setEditMode,
    setEditItemId,
    categoryKey = '',
    disableAdd,
    budgetType 
}) {
 

  return (
    <button className='add-category-btn' disabled={disableAdd}>
      <FontAwesomeIcon icon={faPlus} /> Add Category
    </button>
  );
}

export default AddCategory;
