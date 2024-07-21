import axios from 'axios';

export async function userLoader() {
  try {
    const response = await axios.get('/api/userData/', {withCredentials: true});
    return response.data; 
  } catch (err) {
    console.error(err.response.data.message);
    throw err;
  }
}

