import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../userData/UserContext';
import axios from 'axios'
import useEditMode from '../../hooks/useEditMode';

function AddCategory({ 
    addItem,
    categoryKey = '',
    budgetType 
}) {
 
  const {setUserBudget} = useUserContext()
  const {setEditMode, setEditItemId} = useEditMode()

  const createNewItem = async () => {
    try{
      const userID = await axios.get('/api/userID');
      const newItem = await axios.post('/api/createNewItem', {id: userID.data, table: budgetType});
      const userData = await axios.get('/api/userData/');
      setUserBudget(userData.data)
      setEditMode(true)
      setEditItemId(newItem.data.id)
    } catch(err){
      console.log(err);
    }
  }




  return (
    <button className='add-category-btn' onClick={createNewItem}>
      <FontAwesomeIcon icon={faPlus} /> Add Category
    </button>
  );
}

export default AddCategory;
