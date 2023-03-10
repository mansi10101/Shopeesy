import {
  List,
  Drawer,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import styles from '../../stylesheets/Navbar.module.css';

function DrawerComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} anchor={'right'} onClose={() => setOpen(false)}>
        <List>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <NavLink to='/'>
                <p className={styles.navlinks}>Home</p>
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <NavLink  to='/shop'>
                <p className={styles.navlinks}>Shop</p>
              </NavLink>
            </ListItemText>
          </ListItem>{' '}
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <NavLink to='/myorders'>
                <p className={styles.navlinks}>Orders</p>
              </NavLink>
            </ListItemText>
          </ListItem>{' '}
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <NavLink  to='/about'>
                <p className={styles.navlinks}>About</p>
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <NavLink  to='/contact'>
                <p className={styles.navlinks}>Contact</p>
              </NavLink>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon sx={{ color: 'secondary.dark' }} />
      </IconButton>
    </div>
  );
}

export default DrawerComponent;
