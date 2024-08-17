import { useUserContext } from '../userData/UserContext';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../components/common/Sidebar';
import DashboardUi from '../components/dashboard/DashboardUi'

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

        <Grid component={'aside'} item xs={2} sx={{borderRight: '1px solid hsl(0,0%,90%)', overflow: 'hidden'}}>
          <Sidebar />
        </Grid>

        <DashboardUi />
        
      </Grid>
       
     )}
    </>
  );
};

export default ClientDashboard;
