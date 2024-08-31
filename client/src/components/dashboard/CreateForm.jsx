import { Box, FormControl, Input, Button, Typography } from "@mui/material";
import { Done } from "@mui/icons-material";
import axios from "axios";
import { useUserContext } from "../../userData/UserContext";
import { useState } from "react";

function CreateForm({ setToggleModal, table }) {

    const { setUserBudget } = useUserContext();
    const [formData, setFormData] = useState({ name: '', amount: '', table });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    async function handleCreateBudget(e) {
        e.preventDefault();
        try {
          const userID = await axios.get('/api/userID');
          const { id } = userID.data;
          await axios.post('/api/createNewItem', { id, ...formData });
          
          // Fetch updated user data
          const userData = await axios.get('/api/userData/');
          setUserBudget(userData.data);
        } catch (err) {
          console.log(err);
        } finally {
          setToggleModal(false);
          setFormData({ name: '', amount: '', table });
        }
        
      }

  return (
    <>
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
            Create Budget
        </Typography>
        <Box component="form" noValidate sx={{ height: '100%' }} onSubmit={handleCreateBudget}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <FormControl>
                <Input
                    sx={{ border: '1px solid' }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    name="name"
                    placeholder="Budget Name"
                    value={formData.name}
                    disableUnderline
                    onChange={handleChange}
                />
                </FormControl>
                <FormControl>
                <Input
                    sx={{ border: '1px solid' }}
                    inputProps={{ style: { textAlign: 'center' } }}
                    type="number"
                    name="amount"
                    placeholder="Budget Amount"
                    value={formData.amount}
                    disableUnderline
                    onChange={handleChange}
                />
                </FormControl>
                <Button type="submit" sx={{ color: 'black', '&:hover': { background: 'none' } }}>
                    <Done />
                </Button>
            </Box>
        </Box>
    </>
  );
}

export default CreateForm;
