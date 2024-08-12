import {Box, Button, Typography} from '@mui/material'
import { useAuth } from '../../context/AuthContext';

function Sidebar() {
    const {logout} = useAuth()
    return ( 
        <Box p={4} sx={{height: {xs: '100vh'}}}>
            <Typography component={'h5'} variant='header' color={'primary'}>Budgetwise</Typography>

            <Button onClick={logout} color="secondary">Logout</Button>
        </Box>
     );
}

export default Sidebar;