import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    IconButton
  } from '@mui/material';
  import { Circle as CircleIcon, MoreHoriz } from '@mui/icons-material';
  import React from "react";
  import { useUserContext } from '../../userData/UserContext';
  
  function FinanceCard({ name }) {
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
      <Card sx={{ maxWidth: 345, height: '200px', overflow: 'scroll' }}>
        <CardContent>
          <Typography variant="h6" component="div" sx={{zIndex: '999', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '0', background: 'white' }}>
            {title}
            <IconButton size="small">
              <MoreHoriz />
            </IconButton>
          </Typography>
          <List>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ textAlign: 'left' }}
                  />
                  <Typography variant="body2" sx={{ color: item.amount < 0 ? 'red' : 'green' }}>
                    £{item.amount.toFixed(2)}
                  </Typography>
                </ListItem>
                {index < items.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
  
  export default FinanceCard;
  