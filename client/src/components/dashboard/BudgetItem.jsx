import { Delete, Done } from "@mui/icons-material";
import { Button, FormControl, Input, ListItem, Typography } from "@mui/material";
import React from "react";

const BudgetItem = React.memo(({ budget, handleChange, updateBudget, deleteBudget, error }) => {
  const { id, name, amount } = budget;
  

  return (
    <ListItem disablePadding sx={{width: 'fit-content', gap: '10px'}}>
      <FormControl>
        <Input
          sx={{ border: '1px solid' }}
          inputProps={{ style: { textAlign: 'center' } }}
          name="name"
          placeholder="Budget Name"
          value={name}
          disableUnderline
          onChange={(e) => handleChange(id, e.target.name, e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && updateBudget(e, budget)}
        />
      </FormControl>

      <FormControl>
        <Input
          sx={{ border: '1px solid' }}
          inputProps={{ style: { textAlign: 'center' } }}
          name="amount"
          placeholder="Budget Amount"
          value={amount}
          disableUnderline
          type="number"
          onChange={(e) => handleChange(id, e.target.name, e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && updateBudget(e, budget)}
        />
      </FormControl>

      <Button onClick={(e) => updateBudget(e, budget)}>
        <Done />
      </Button>

      <Button onClick={() => deleteBudget(budget)}>
        <Delete />
      </Button>

      {error.length > 0 && error[0].id === id && <Typography sx={{ color: 'red' }}>{error[0].message}</Typography>}
    </ListItem>
  );
});

export default BudgetItem;
