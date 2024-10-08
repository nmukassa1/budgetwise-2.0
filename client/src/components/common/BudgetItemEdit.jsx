import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useUserContext } from '../../userData/UserContext';
import useEditMode from '../../hooks/useEditMode';

function BudgetItemEdit({
  item,
  budgetType
}) {

  const [formData, setFormData] = useState({
    budgetName: '',
    budgetAmount: '',
    budgetType: budgetType
  })

  const {setUserBudget} = useUserContext()
  const {setEditMode,} = useEditMode()


  const inputNameRef = useRef();
  const inputAmountRef = useRef();

  useEffect(() => {
    //set form data
    setFormData({
      budgetName: item.name,
      budgetAmount: item.amount,
      budgetType: budgetType
    })

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
    try{
      const result = await axios.put('/api/updateItem/' + item.id, formData);
      const userData = await axios.get('/api/userData/');
      setUserBudget(userData.data)

    } catch(error){
      console.log(error);
    } finally{
      setEditMode(false);
    }
  };



  async function deleteItem(){ 
    const userID = item.id;
    try{
        const result = await axios.delete(`/api/deleteItem/${userID}?table=${budgetType}`)
        const userData = await axios.get(`/api/userData`)
        setUserBudget(userData.data)
    }  catch(err){
        console.error(err)
    }
}

  return (
    <>

      {/* <form className='budget-edit-form'> */}
        <div className='budget-item__actions'>
          <button className="delete-btn" onClick={deleteItem}>
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
            placeholder={budgetType.charAt(0).toUpperCase() + budgetType.slice(1)}
            value={formData.budgetName || ''}
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
              if (e.code === 'Enter') saveEditedItem(e);
            }}
            ref={inputAmountRef}
          />
      {/* </form> */}
    </>
  );
}

export default BudgetItemEdit;
