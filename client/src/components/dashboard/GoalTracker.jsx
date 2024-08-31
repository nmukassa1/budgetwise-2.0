import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, LinearProgress, Box, Button, ListItem, ListItemText, IconButton } from '@mui/material';
import {Add} from '@mui/icons-material';
import axios from 'axios';
import { useUserContext } from '../../userData/UserContext';

function GoalTracker({item, table}) {

  const {setUserBudget} = useUserContext();

  // Calculate the progress percentage
  const progress = Math.round((item.amount / item.target) * 100);
  const [monthsTillGoalReached, setMonthsTillGoalReached] = useState();

  const updateBudget = async (table, item) => {

    const {id, deposit, amount} = item

    const updateValues = {amount: amount + deposit};

    try {
      await axios.put(`/api/updateBudget/${table}/${id}`, updateValues);
      const userData = await axios.get('/api/userData/');
      setUserBudget(userData.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    setMonthsTillGoalReached(Math.round(item.target / (item.amount || item.deposit)));
  }, [item])

  return (
      <ListItem disablePadding sx={{display: 'block'}}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <ListItemText
              primary={item.name}
              sx={{ textAlign: 'left' }}
              primaryTypographyProps={{ fontSize: '.875rem' }}
          />

          {/* If goal is not reached, display deposit button */}
          {progress < 100 && (
            <Box>
              <Box component='span' sx={{marginRight: '5px', color: 'hsl(0,0%,50%)', fontSize: '.7rem'}}>
                ({item.deposit})
              </Box> 
              <IconButton sx={{ 
                backgroundColor: 'primary.main', 
                borderRadius: '100%', 
                padding: '2px',
                fontSize: '.75rem',
                color: 'white', 
                '&:hover': {backgroundColor: 'primary.main'}}}
                onClick={() => updateBudget('savings', item)}
                >
                    <Add sx={{fontSize: 'inherit'}} />
              </IconButton>
            </Box>
          )}
        </Box>

        <LinearProgress variant="determinate" value={progress} sx={{ mt: '3px', height: '5px', borderRadius: 5 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">£{item.amount}</Typography>
          <Typography variant="body2">
            {progress}%
            <Box component='span' sx={{marginLeft: '5px', color: 'hsl(0,0%,50%)', fontSize: '.7rem'}}>
                {monthsTillGoalReached}m
            </Box> 
          </Typography>
        </Box>


        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={addProgress}>Add £50</Button>
          <Button variant="outlined" color="error" onClick={resetProgress}>Reset</Button>
        </Box> */}
      </ListItem>
  );
}

export default GoalTracker;
