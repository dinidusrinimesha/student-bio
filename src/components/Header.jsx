import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#CDC1D6' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            ABC School
          </Typography>
          <Button color="inherit" sx={{color: 'black' }}>Contact Us: 071123123</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
