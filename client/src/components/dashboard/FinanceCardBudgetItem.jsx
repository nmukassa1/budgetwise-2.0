import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Circle as CircleIcon } from '@mui/icons-material';


  
function FinanceCardBudgetItem({item}) {
    function getRandomHSLColor() {
        const h = Math.floor(Math.random() * 360); // Hue: 0-359
        const s = Math.floor(Math.random() * 101) + 50; // Saturation: 0-100%
        const l = Math.floor(Math.random() * 101); // Lightness: 0-100%
    
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    
    return ( 
        <ListItem disablePadding>
            <ListItemIcon sx={{ minWidth:'0', marginRight: '10px'}}>
                <CircleIcon sx={{ fontSize: 12, color: getRandomHSLColor() }} />
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