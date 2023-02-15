import * as React from 'react';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import styles from '../../stylesheets/Navbar.module.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Router from './Router';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ThemeProvider, createTheme } from '@mui/system';
import DrawerComponent from './DrawerComponent';
import { useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  var theme = createTheme({
    palette: {
      secondary: {
        dark: '#000000',
      },
    },
  });
  const style = {
    backgroundColor: show ? 'white' : '#E3E6F3',
    boxShadow: show ? '0 2px 4px 0 rgba(0,0,0,.2)' : 'none',
    zIndex: 1,
    transitionTimingFunction: 'ease-in',
    transition: 'all 0.3s',
  };
  theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.nav}>
        <AppBar position='fixed' width='100vw' sx={style}>
          <CssBaseline />
          <Toolbar className={styles.navcontent}>
            <div>
              <LogoSVG width='200px'/>
            </div>
            <div className={styles.router}>
              <div>{!isMobile && <Router show={show} />}</div>
              <div>
                <ShoppingBagIcon
                  sx={{ color: 'secondary.dark', fontSize: '2.5rem' }}
                />
              </div>
              <div>{isMobile && <DrawerComponent />}</div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
