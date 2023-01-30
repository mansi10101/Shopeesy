import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { ThemeProvider, useMediaQuery, useTheme } from '@mui/material';

const Router = ({ show }) => {
  var theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.up('md'));
  const style = {
    color: 'black',
    fontSize: isMobile ? 21 : 22,
    fontWeight: 'bold',
    p: isMobile ? 2 : 5,
    margin: '0px 15px',
    transition: 'background 1s',
    '&:hover': {
      backgroundColor: 'powderblue',
    },
    fontFamily: 'cursive',
    lineHeight: 'normal',
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          transitionTimingFunction: 'ease-in',
          transition: 'all 0.3s',
          backgroundColor: show ? 'white' : '#E3E6F3',
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab sx={style} label='Home' to='/' component={Link} />
          <Tab sx={style} label='Shop' to='/shop' component={Link} />
          <Tab sx={style} label='BLOG' to='/blog' component={Link} />
          <Tab sx={style} label='about' to='/about' component={Link} />
          <Tab sx={style} label='conatct' to='/contact' component={Link} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default Router;
