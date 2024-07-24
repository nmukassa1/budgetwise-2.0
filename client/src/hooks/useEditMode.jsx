import { useState, useContext, createContext } from 'react';

const EditModeContext = createContext();

export const EditModeProvider = ({ children }) => {
    const [editMode, setEditMode] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    return (
        <EditModeContext.Provider value={{ editMode, setEditMode, editItemId, setEditItemId }}>
            {children}
        </EditModeContext.Provider>
    );
};

const useEditMode = () => {
    return useContext(EditModeContext);
};

export default useEditMode;
