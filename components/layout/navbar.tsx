import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetweenBox from './FlexBetweenBox';
import PixIcon from '@mui/icons-material/Pix';

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');

  return (
    <FlexBetweenBox mb="0.25rem" p="0.75rem 1.5rem" color={palette.grey[300]}>
      <FlexBetweenBox gap="0.75rem">
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant="h4" fontSize="16px">
          AI DashBoard
        </Typography>
      </FlexBetweenBox>

      <FlexBetweenBox gap="2rem">
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            href="/"
            onClick={() => setSelected('dashboard')}
            style={{
              cursor: 'pointer',
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit'
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            href="/predictions"
            onClick={() => setSelected('predictions')}
            style={{
              cursor: 'pointer',
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit'
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetweenBox>
    </FlexBetweenBox>
  );
};

export default Navbar;
