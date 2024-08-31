import axios from "axios";

export async function handleCreateBudget(e, formData, setUserBudget, setToggleModal, setFormData, table) {
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

export async function handleEditBudget(e, formData) {
  e.preventDefault();
  console.log(formData);
  // Implement the edit functionality here
}
