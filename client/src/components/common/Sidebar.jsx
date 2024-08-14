import {Box, Button, List, ListItem, Typography} from '@mui/material'
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import DashboardLink from '../dashboard/DashboardLink';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidebar() {
    const {logout} = useAuth()
    return ( 
        <Box p={4} sx={{height: {xs: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box>
                <Typography component={'h5'} variant='header' color={'primary'}>Budgetwise</Typography>

                <nav style={{marginTop: '30px'}}>
                    <DashboardLink text="Dashboard" icon={DashboardIcon} />
                </nav>
            </Box>

            <Box >
                <DashboardLink text="Help" icon={DashboardIcon} />
                <DashboardLink text="Settings"  icon={DashboardIcon}/>
                <Button onClick={logout} color="secondary">Logout</Button>
            </Box>
        </Box>
     );
}

export default Sidebar;