import { Delete, Done } from "@mui/icons-material";
import { Box, Button, FormControl, Input, List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../userData/UserContext";

function EditForm({setToggleModal, table}) {
  const { userBudget, setUserBudget } = useUserContext();

  const [budgetList, setBudgetList] = useState(userBudget[table]);

  const handleChange = (id, name, value) => {
    setBudgetList(prevBudgetList =>
      prevBudgetList.map(budget =>
        budget.id === id ? { ...budget, [name]: value } : budget
      )
    );
  };

  async function deleteItem(item){ 
    const id = item.id;
    try{
        const result = await axios.delete(`/api/deleteItem/${id}?table=${table}`)
        const userData = await axios.get(`/api/userData`)
        setUserBudget(userData.data)
    }  catch(err){
        console.error(err)
    }
}

  useEffect(() => {
    setBudgetList(userBudget[table]);
    if (userBudget[table].length === 0) {
      setBudgetList([])
      setToggleModal(false)
    }
    
  },[userBudget])


  return (
    <>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        Edit Budget
      </Typography>
      <Box component="form" noValidate sx={{ height: '100%' }}>
        <List>
            {budgetList.map((budget) => (
              <ListItem disablePadding key={budget.id}>
                <FormControl>
                  <Input
                    sx={{ border: '1px solid' }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    name="name"
                    placeholder="Budget Name"
                    value={budget.name}
                    disableUnderline
                    onChange={(e) => handleChange(budget.id, e.target.name, e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    sx={{ border: '1px solid' }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    name="amount"
                    placeholder="Budget Amount"
                    value={budget.amount}
                    disableUnderline
                    type="number"
                    onChange={(e) => handleChange(budget.id, e.target.name, e.target.value)}
                  />
                </FormControl>

                <Button>
                  <Done />
                </Button>

                <Button onClick={() => deleteItem(budget)}>
                  <Delete />
                </Button>
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
}

export default EditForm;
