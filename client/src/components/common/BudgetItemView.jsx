import React from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from '../../userData/UserContext';
import useEditMode from '../../hooks/useEditMode';

function BudgetItemView({item,
    budgetType}) {

    const {setUserBudget} = useUserContext()
    const {setEditMode, setEditItemId} = useEditMode()


    function handleEdit(){
        setEditMode(true);
        setEditItemId(item.id)
    }

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
        <div className="budget-item__actions">
            <button className="delete-btn" onClick={deleteItem}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="edit-btn" onClick={handleEdit}>
                <FontAwesomeIcon icon={faPencil} />
            </button>
        </div>
        <div className="budget-item__name">{item.name}</div>
        <div className="budget-item__amount">{
            Number(item.amount).toLocaleString('en-UK', {style: 'currency', currency: 'GBP'})    
        }</div>
        </>
     );
}

export default BudgetItemView;