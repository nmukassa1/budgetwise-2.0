import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    IconButton,
    Box
  } from '@mui/material';
  import { Circle as CircleIcon, MoreHoriz } from '@mui/icons-material';
  import React from "react";
  import { useUserContext } from '../../userData/UserContext';
import FinanceCardBudgetItem from './FinanceCardBudgetItem';
import GoalTracker from './GoalTracker';
  
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
      <Card sx={{ width: '345px', height: '200px', overflow: 'scroll' }}>
        <CardContent>
          <Typography variant="h6" component="div" sx={{zIndex: '999', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '0', background: 'white' }}>
            {title}
            <IconButton size="small">
              <MoreHoriz />
            </IconButton>
          </Typography>
          
          <Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid hsla(0, 0%, 0%, 0.12)', paddingBottom: '2px'}}>
                <Typography sx={{fontSize: '.8rem', color: 'grey'}}>Name</Typography>
                <Typography sx={{fontSize: '.8rem', color: 'grey'}}>Amount</Typography>
            </Box>
            <List>
                {items.map((item, index) => (
                <React.Fragment key={index}>
                    {!isGoal ? (
                        <FinanceCardBudgetItem item={item} />
                    ) : 
                        <GoalTracker item={item} />
                    }
                    {index < items.length - 1 && <Divider />}
                </React.Fragment>
                ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    );
  }
  
  export default FinanceCard;
  