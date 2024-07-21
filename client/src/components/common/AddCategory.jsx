import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../userData/UserContext';
import axios from 'axios'

function AddCategory({ 
    addItem,
    categoryKey = '',
    budgetType 
}) {
 
  const {setUserBudget} = useUserContext()

  const createNewItem = async () => {
    try{
      const userID = await axios.get('/api/userID');
      await axios.post('/api/createNewItem', {id: userID.data, table: budgetType});
      const userData = await axios.get('/api/userData/');
      setUserBudget(userData.data)
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
