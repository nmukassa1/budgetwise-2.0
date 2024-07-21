import React from "react";

function BudgetContainer({children}) {
    return (
        <div className='budget-container'>
            {children}
        </div>
    );
}

export default BudgetContainer;