import * as React from 'react';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import styles from '../../stylesheets/Navbar.module.css';
import { AppBar, Toolbar, CssBaseline,useTheme,useMediaQuery, } from '@mui/material';
import Router from './Router';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ThemeProvider, createTheme } from '@mui/system';
import DrawerComponent from './DrawerComponent';


const Navbar = () => {

  var theme = createTheme({
    palette:{
      secondary:{
        dark: "#000000",
      },
    },
  });
  theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={styles.nav}>
      <AppBar position='static' width="100vh">
        <CssBaseline />
        <Toolbar className={styles.navcontent}>
          <div>
            <LogoSVG width='200px' />
          </div>
          <div className={styles.router}>
            <div>
             {isMobile? (<DrawerComponent/>):
             <Router/>
             } 
            </div>
            <div>
              <ThemeProvider theme={theme}>
              <ShoppingBagIcon fontSize='large' sx={{color:'secondary.dark', marginLeft:"20px"}}/>
              </ThemeProvider>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
