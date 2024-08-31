import {
    Card,
    CardContent,
    Typography,
    List,
    Divider,
    IconButton,
    Box,
    Button
  } from '@mui/material';
  import { Circle as CircleIcon, MoreHoriz } from '@mui/icons-material';
  import React, { useState } from "react";
  import { useUserContext } from '../../userData/UserContext';
import FinanceCardBudgetItem from './FinanceCardBudgetItem';
import GoalTracker from './GoalTracker';

import { useRef } from 'react';
import CardBody from './Card/CardBody';
import CardName from './Card/CardName';
// import DashboardModal from './DashboardModal';
  
  function FinanceCard({ name, isGoal }) {
    const { userBudget } = useUserContext();
  
    // Convert the name to lowercase
    const reset = name.toLowerCase();
  
    // Capitalize the first letter of reset
    const title = reset.charAt(0).toUpperCase() + reset.slice(1);
  
    // Set the table variable to be equal to reset
    const table = reset;
  
    // Check if userBudget[table] exists
    const items = userBudget[table] || [];

  
    return (
      <Card sx={{ width: '265px', height: '200px', overflow: 'scroll', border: '1px solid black', borderRadius: '10px' }}>
        <CardContent>
          <CardName title={title} />
          <CardBody items={items} isGoal={isGoal} table={table} />
        </CardContent>
      </Card>
    );
  }
  
  export default FinanceCard;
  