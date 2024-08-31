import {Box, Button, List, ListItem, Typography, styled} from '@mui/material'
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import DashboardLink from '../dashboard/DashboardLink';
import {Dashboard as DashboardIcon, Info as InfoIcon, Settings as SettingsIcon, Logout as LogoutIcon, PermIdentity} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const style = {
    display: 'flex', // Align items horizontally
    alignItems: 'center', // Center the icon and text
    padding: '6px 12px',
    textDecoration: 'none', // Ensures no underline
    borderRadius: '4px', // Adds a border radius
    marginTop: '10px',
    overflow: 'hidden',
    color: 'black',
    fontSize: '1rem',
    width: '100%',
    textAlign: 'left',
    '&:first-of-type': {
      marginTop: 0, // Remove margin-top for the first link
    },
    '&:hover': {
      textDecoration: 'none', // Prevent underline on hover
      background: 'hsla(0, 0%, 90%)'
    },
  }

const MuiLink = styled(Link)(({theme}) => ({
    '&:hover': {
        background: 'hsl(0,0%,90%)'
    }
}))

function Sidebar() {
    const {logoutAPI, redirectTo} = useAuth()
    const [user, setUser] = useState()

    useEffect(() => {
        if (redirectTo) {
            console.log('Redirecting to:', redirectTo);
            // Perform the redirection here
            // window.location.href = redirectTo;
        }
    }, [redirectTo])

    useEffect(() => {
       const getUser = async () => {
        const result = await axios.get('/api/userData');
        const user = await axios.get('/api/userID');
        setUser(user.data)
       }
       getUser()
    }, [])

    return ( 
        <Box p={4} sx={{height: {xs: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box>
                <Typography component={'h5'} variant='header' color={'primary'}>Budgetwise</Typography>

                <nav style={{marginTop: '30px'}}>
                    <DashboardLink text="Dashboard" IconComponent={DashboardIcon} to="/profile" exact={true} />
                </nav>
            </Box>

            <Box>
                <DashboardLink text="Help" IconComponent={InfoIcon} to='/help' exact={true} />
                <DashboardLink text="Settings"  IconComponent={SettingsIcon} to='/settings' exact={true}/>
                <DashboardLink text="Logout" IconComponent={LogoutIcon} to='/'  exact={true} onClick={logoutAPI} />

                {/* Account Component */}
                <Box mt={1} pt={2} sx={{display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid hsl(0,0%,60%)'}}>
                    <PermIdentity />
                    <Box>
                        {user && (
                            <>
                                <Typography fontSize="small">{user.first_name} {user.last_name}</Typography>
                                <Box fontSize="small">{user.email}</Box>
                            </>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
     );
}

export default Sidebar;