// import React from 'react';
// import { Link, Typography, Box } from '@mui/material';
// import { NavLink } from 'react-router-dom';

// const StyledNavLink = styled(NavLink)(({ theme }) => ({
//   textDecoration: 'none',
//   '&.active': {
//     color: '#EEF3FC',
//   },
// }));

// function DashboardLink({text, icon: IconComponent}) {
//   return (
//     <Link
//       to="/"
//       exact 
//       underline="none" // Removes the default underline of the link
//       sx={{
//         display: 'flex', // Align items horizontally
//         alignItems: 'center', // Center the icon and text
//         padding: '6px 12px',
//         textDecoration: 'none', // Ensures no underline on hover
//         color: '#536DFE', // Custom text color
//         background: '#EEF3FC',
//         borderRadius: '4px', // Adds a border radius
//         marginTop: '10px',
//         '&:first-of-type': {
//           marginTop: 0, // Remove margin-top for the first link
//         },
//         '&:hover': {
//           textDecoration: 'none', // Prevent underline on hover
//         },
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
//         <IconComponent sx={{ fontSize: 'small', color: '#536DFE' }} />
//       </Box>
//       <Typography variant="body1" sx={{ color: '#536DFE' }}>
//         {text}
//       </Typography>
//     </Link>
//   );
// }

// export default DashboardLink;

import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled NavLink using MUI's styled utility
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  '&.active': {
    backgroundColor: '#EEF3FC', // Custom active state background
    color: '#536DFE', // Active state text color
    '&:hover': {
      backgroundColor: '#EEF3FC', // Keep the active background on hover
    },
  },
}));

const style = {
  display: 'flex', // Align items horizontally
  alignItems: 'center', // Center the icon and text
  padding: '6px 12px',
  textDecoration: 'none', // Ensures no underline
  borderRadius: '4px', // Adds a border radius
  marginTop: '10px',
  overflow: 'hidden',
  '&:first-of-type': {
    marginTop: 0, // Remove margin-top for the first link
  },
  '&:hover': {
    textDecoration: 'none', // Prevent underline on hover
    background: 'hsla(0, 0%, 90%)'
  },
}

// Main component
function DashboardLink({ to, exact, text, IconComponent, onClick }) {
  return (
    <StyledNavLink to={to} exact={exact ? 'true' : undefined} onClick={onClick ? onClick : undefined}
      sx={style}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
        <IconComponent sx={{ fontSize: 'small', color: '' }} />
      </Box>
      <Typography variant="body1" sx={{ color: '' }}>
        {text}
      </Typography>
    </StyledNavLink>
  );
}

export default DashboardLink;

