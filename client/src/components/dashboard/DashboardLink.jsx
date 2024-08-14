import React from 'react';
import { Link, Typography, Box } from '@mui/material';

function DashboardLink({text, icon: IconComponent}) {
  return (
    <Link
      href="#"
      underline="none" // Removes the default underline of the link
      sx={{
        display: 'flex', // Align items horizontally
        alignItems: 'center', // Center the icon and text
        padding: '6px 12px',
        textDecoration: 'none', // Ensures no underline on hover
        color: '#536DFE', // Custom text color
        background: '#EEF3FC',
        borderRadius: '4px', // Adds a border radius
        marginTop: '10px',
        '&:first-of-type': {
          marginTop: 0, // Remove margin-top for the first link
        },
        '&:hover': {
          textDecoration: 'none', // Prevent underline on hover
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
        <IconComponent sx={{ fontSize: 'small', color: '#536DFE' }} />
      </Box>
      <Typography variant="body1" sx={{ color: '#536DFE' }}>
        {text}
      </Typography>
    </Link>
  );
}

export default DashboardLink;
