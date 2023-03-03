import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material';
import styles from '../../stylesheets/Navbar.module.css';

const Router = ({ show, mediaq }) => {
  var theme = useTheme();
  const style = {
    color: 'black',
    fontSize: mediaq ? 10 : 22,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    lineHeight: 'normal',
    backgroundColor: "transparent",
    minWidth:"70px",
    maxWidth:0,
    padding:0,
    margin:0,
    minHeight: "30px"
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
        <Tabs centered sx={{minHeight: "0px"}}>
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
