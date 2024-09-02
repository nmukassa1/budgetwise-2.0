import { useUserContext } from '../userData/UserContext';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../components/common/Sidebar';
import DashboardUi from '../components/dashboard/DashboardUi'

const ClientDashboard = () => {

  const userData = useLoaderData()

  const {userBudget, setUserBudget} = useUserContext()

  function calculatePercentage(expenses, income) {
    // Calculate the total income
    const totalIncome = income.reduce((sum, source) => sum + source.amount, 0);

    // Calculate the percentage of income spent on each expense
    return expenses.map(expense => {
        const percentage = ((expense.amount / totalIncome) * 100).toFixed(2);
        return {
            ...expense,
            percentageSpent: `${percentage}%`
        };
    });
}
  
  useEffect(() => {
    setUserBudget(userData)
  }, [])
  useEffect(() => {
    console.log(calculatePercentage(userBudget.expenses, userBudget.income))
    console.log(calculatePercentage(userBudget.savings, userBudget.income))
  }, [userBudget])

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
