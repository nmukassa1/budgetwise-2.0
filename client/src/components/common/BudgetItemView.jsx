import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMinus } from '@fortawesome/free-solid-svg-icons'

function BudgetItemView({item, setEditMode, setEditItemId}) {


    function handleEdit(){
        setEditMode(true);
        setEditItemId(item.id)
    }
    function deleteItem(){ 
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