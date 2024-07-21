import Income from '../components/categories/Income';
import Expenses from '../components/categories/Expenses';
import Debt from '../components/categories/Debt';
import Savings from '../components/categories/Savings';
import Balance from '../components/Balance';
import Banner from '../components/Banner';

import { useUserContext } from '../userData/UserContext';
import { useLoaderData } from 'react-router-dom';


 
import { useEffect } from 'react';

const ClientDashboard = () => {

  const userData = useLoaderData()

  const {userBudget, setUserBudget} = useUserContext()
  
  useEffect(() => {
    setUserBudget(userData)
  }, [])






  return (
    <>
     {userData && (
       <div>
        <Banner />
        <div id="wrapper">
          <Income />
          <Expenses /> 
          <Debt />
          <Savings /> 
          <Balance />   
       </div>
     </div>
     )}
    </>
  );
};

export default ClientDashboard;
