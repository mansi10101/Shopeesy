import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import {ThemeProvider, useMediaQuery,useTheme} from '@mui/material';


const Router = () => {
  var theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const style = {
    color: 'black',
    fontSize: isMobile? 20 : 22,
    fontWeight: 'bold',
    p: isMobile? 2 : 5,
    margin: '0px 15px',
    transition: 'background 1s',
    '&:hover': {
      backgroundColor: 'powderblue',
    },
  
};

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          sx = {style}
          label='Home'
          to='/'
          component={Link}
        />
        <Tab
          sx = {style}
          label='Shop'
          to='/shop'
          component={Link}
        />
        <Tab
          sx = {style}
          label='BLOG'
          to='/blog'
          component={Link}
        />
        <Tab
          sx = {style}
          label='about'
          to='/about'
          component={Link}
        />
        <Tab
          sx = {style}
          label='conatct'
          to='/contact'
          component={Link}
        />
      </Tabs>
    </Box>
    </ThemeProvider>
  );
};

export default Router;
