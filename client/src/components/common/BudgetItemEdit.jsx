import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import {useParams} from 'react-router-dom'

function BudgetItemEdit({
  categoryKey,
  setEditMode,
  editItemId,
  removeItem,
  item,
  budgetType
}) {

  const [formData, setFormData] = useState({
    budgetName: '',
    budgetAmount: '',
    budgetType: budgetType
  })


  const inputNameRef = useRef();
  const inputAmountRef = useRef();

  const {id} = useParams()

  useEffect(() => {
    inputNameRef.current.focus();
  }, []);

  function handleChange(e){
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
  }


  const saveEditedItem = async (e) => {
    e.preventDefault()
    if (formData.budgetName.trim() === '' || isNaN(formData.budgetAmount) || formData.budgetAmount === '') return;
    const userID = id;
    try{
      const result = await axios.post('/api/newItem/' + userID, formData)
      console.log(result);
    } catch(err){
      console.log(err);
    }
    // setEditMode(false);
  };

  const handleDelete = () => {
    dispatch({ type: removeItem, payload: { id: item.id } });
    setEditMode(false);
  };

  return (
    <>

      <form>
        <div className='budget-item__actions'>
          <button className="delete-btn" onClick={handleDelete}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="edit-btn" onClick={saveEditedItem}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
          <input
            className='edit-input-name'
            type="text"
            name='budgetName'
            placeholder={categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
            value={formData.budgetName}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.code === 'Enter') inputAmountRef.current.focus();
            }}
            ref={inputNameRef}
          />
          <input
            type='number'
            name='budgetAmount'
            className='edit-input-amount'
            placeholder='Amount'
            value={formData.budgetAmount}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.code === 'Enter') saveEditedItem();
            }}
            ref={inputAmountRef}
          />
      </form>
    </>
  );
}

export default BudgetItemEdit;
