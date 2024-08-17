import React, { useState } from 'react';
import { Card, CardContent, Typography, LinearProgress, Box, Button, ListItem, ListItemText } from '@mui/material';

function GoalTracker({item}) {

  // Calculate the progress percentage
  const progress = (item.amount / item.target) * 100;

  // Handlers
  const addProgress = () => setCurrentAmount((prev) => Math.min(prev + 50, targetAmount));
  const resetProgress = () => setCurrentAmount(0);

  return (
      <ListItem disablePadding sx={{display: 'block'}}>
        <ListItemText
            primary={item.name}
            sx={{ textAlign: 'left' }}
            primaryTypographyProps={{ fontSize: '.875rem' }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">£{item.amount}</Typography>
          <Typography variant="body2">{progress}%</Typography>
        </Box>

        <LinearProgress variant="determinate" value={progress} sx={{ mt: '3px', height: '5px', borderRadius: 5 }} />

        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={addProgress}>Add £50</Button>
          <Button variant="outlined" color="error" onClick={resetProgress}>Reset</Button>
        </Box> */}
      </ListItem>
  );
}

export default GoalTracker;
