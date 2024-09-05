import React from 'react';
import { Box, Typography } from '@mui/material';

function PersonalInfo() {
  return (
    <Box p={2}>
      <Typography variant="h6">Personal Information</Typography>
      <Typography>Name: Kasun Tharinda de Silva</Typography>
      <Typography>Student ID: 20240001234</Typography>
      <Typography>Date of Birth: Jan 01, 2000</Typography>
    </Box>
  );
}

export default PersonalInfo;

