import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import styles from '../../stylesheets/Navbar.module.css';

const Router = ({ show }) => {
  var theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('md'));
  const style = {
    color: 'black',
    fontSize: isMobile ? 21 : 22,
    fontWeight: 'bold',
    p: isMobile ? 2 : 5,
    margin: '0px 15px',
    fontFamily: 'cursive',
    lineHeight: 'normal',
    backgroundColor: "transparent"
  };

  return (
    <ThemeProvider theme={theme}>
      {window.scrollTo(0, 0)}
      <Box
        sx={{
          width: '100%',
          transitionTimingFunction: 'ease-in',
          transition: 'all 0.3s',
          backgroundColor: show ? 'white' : '#E3E6F3',
        }}
      >
        <Tabs centered>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <Tab sx={style} label='Home' />
          </NavLink>
          <NavLink
            to='/shop'
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <Tab sx={style} label='Shop' />
          </NavLink>
          <NavLink
            to='/myorders'
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <Tab sx={style} label='Orders' />
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <Tab sx={style} label='about' />
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            <Tab sx={style} label='contact' />
          </NavLink>
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default Router;
