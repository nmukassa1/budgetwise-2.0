import React from "react";
import { Box, Divider, List, Typography } from "@mui/material";
import FinanceCardBudgetItem from "../FinanceCardBudgetItem";
import GoalTracker from "../GoalTracker";

// Wrap with React.memo to prevent unnecessary re-renders
const CardBody = React.memo(({ items, isGoal, table }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid hsla(0, 0%, 0%, 0.12)',
          paddingBottom: '2px',
        }}
      >
        <Typography sx={{ fontSize: '.8rem', color: 'grey' }}>Name</Typography>
        <Typography sx={{ fontSize: '.8rem', color: 'grey' }}>Amount</Typography>
      </Box>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {!isGoal ? (
              <FinanceCardBudgetItem item={item} table={table} />
            ) : (
              <GoalTracker item={item} table={table} />
            )}
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
});

export default CardBody;
