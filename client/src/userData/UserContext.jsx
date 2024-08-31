import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
    const [userBudget, setUserBudget] = useState(
        {
            income: [],
            expenses: [],
            savings: [],
            debt: [],
        }
    )

  
    return (
        <UserContext.Provider value={{ userBudget, setUserBudget }}>
            {children}
        </UserContext.Provider>
    );
}

// Custom hook to use the UserContext
export function useUserContext() {
    return useContext(UserContext);
}
