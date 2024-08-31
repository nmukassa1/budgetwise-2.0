import { Box, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../userData/UserContext";
import BudgetItem from "./BudgetItem"; // Import the BudgetItem component
import axios from "axios";

function EditForm({ setToggleModal, table }) {
  const { userBudget, setUserBudget } = useUserContext();

  const [budgetList, setBudgetList] = useState(userBudget[table]);
  const [error, setError] = useState([]);

  const handleChange = (id, name, value) => {
    setBudgetList(prevBudgetList =>
      prevBudgetList.map(budget =>
        budget.id === id ? { ...budget, [name]: value } : budget
      )
    );
  };

  const deleteBudget = async (item) => { 
    const id = item.id;
    try {
      await axios.delete(`/api/deleteItem/${id}?table=${table}`);
      const userData = await axios.get(`/api/userData`);
      setUserBudget(userData.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateBudget = async (e, budget) => {
    e.preventDefault();
    const { id, name, amount } = budget;

    if (name.trim() === '' || isNaN(amount) || amount === '') {
      const newError = { message: 'Enter a value', id: id }; 
      // check if the error message already exists in the error array
      if (error.some((item) => item.id === id)) {
        setError(error.map((item) => (item.id === id ? newError : item)));
        throw new Error('Enter a value');
      } else {
        setError([...error, newError]);
        throw new Error('Enter a value');
      }
    }

    try {
      await axios.put('/api/updateBudget/' + id, { ...budget, table });
      const userData = await axios.get('/api/userData/');
      setUserBudget(userData.data);

      // Clear the error message for the updated item
      setError(error.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setBudgetList(userBudget[table]);
    if (userBudget[table].length === 0) {
      setBudgetList([]);
      setToggleModal(false);
    }
  }, [userBudget, table, setToggleModal]);

  useEffect(() => {
    console.log(error); 
  },[error])

  return (
    <>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        Edit Budget
      </Typography>
      <Box component="form" noValidate sx={{ height: '100%' }}>
        <List>
          {budgetList.map((budget) => (
            <BudgetItem
              key={budget.id}
              budget={budget}
              handleChange={handleChange}
              updateBudget={updateBudget}
              deleteBudget={deleteBudget}
              error={error.filter((item) => item.id === budget.id)}
            />
          ))}
        </List>
      </Box>
    </>
  );
}

export default EditForm;
