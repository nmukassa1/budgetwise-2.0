import Income from '../components/categories/Income';
import Expenses from '../components/categories/Expenses';
import Debt from '../components/categories/Debt';
import Savings from '../components/categories/Savings';
import Balance from '../components/common/Balance';
import Banner from '../components/common/Banner';

import { useUserContext } from '../userData/UserContext';
import { useLoaderData } from 'react-router-dom';


 
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../components/common/Sidebar';

const ClientDashboard = () => {

  const userData = useLoaderData()

  const {userBudget, setUserBudget} = useUserContext()
  
  useEffect(() => {
    setUserBudget(userData)
  }, [])

  return (
    <>
     {userData && (
      <Grid container>

        <Grid component={'aside'} item xs='2'>
          <Sidebar />
        </Grid>

        <Grid item xs='10'>
          <div>
            <Grid container
              spacing={2}
              justifyContent="center" // Centers the grid horizontally
              alignItems="center"     // Centers the grid vertically
              sx={{ minHeight: '100vh' }} // Ensures the grid takes full view 
              >
              <Grid item xs={12} sm={6}>
                <Income />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Expenses /> 
              </Grid>
              <Grid item xs={12} sm={6}>
                <Savings /> 
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <Savings />  */}
              </Grid>
              
              {/* <Debt /> */}
              
              <Balance />   
            </Grid>
          </div>
        </Grid>
      </Grid>
       
     )}
    </>
  );
};

export default ClientDashboard;
