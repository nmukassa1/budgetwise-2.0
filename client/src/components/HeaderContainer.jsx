import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useUserContext } from '../userData/UserContext';

function HeaderContainer({ title, budgetType, color, budgetListRef }) {

    const {userBudget} = useUserContext()

    const totalAmount = userBudget[budgetType].reduce((acc, item) => acc + Number(item.amount), 0);


    const arrowRef = useRef();

    function toggleList(){
        budgetListRef.current.classList.toggle('show-list');
        arrowRef.current.classList.toggle('turn');
    }
    return ( 
        <div className="header-container">
            <h3>
                {title}
                <span style={{ color: color }}>{totalAmount.toLocaleString('en-UK', {style: 'currency', currency: 'GBP'})}</span>
            </h3>
            <button ref={arrowRef} onClick={toggleList} className='toggle-list'><FontAwesomeIcon icon={faGreaterThan} /></button>
        </div>
    );
}

export default HeaderContainer;
