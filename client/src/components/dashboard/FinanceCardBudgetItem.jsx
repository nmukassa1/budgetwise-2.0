import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Circle as CircleIcon } from '@mui/icons-material';

function FinanceCardBudgetItem({item}) {
    return ( 
        <ListItem disablePadding>
            <ListItemIcon sx={{ minWidth:'0', marginRight: '10px'}}>
                <CircleIcon sx={{ fontSize: 12 }} />
            </ListItemIcon>
            <ListItemText
                primary={item.name}
                sx={{ textAlign: 'left' }}
                primaryTypographyProps={{ fontSize: '.875rem' }}
            />
            <Typography variant="body2" sx={{ color: item.amount < 0 ? 'red' : 'green' }}>
                {item.amount.toLocaleString('en-GB', {style:'currency', currency: 'GBP'})}
            </Typography>
        </ListItem>
    );
}

export default FinanceCardBudgetItem;