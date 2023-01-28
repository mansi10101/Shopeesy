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
      <Drawer
        open={open}
        anchor={'left'}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
            <NavLink className={styles.navlinks}  to='/'>Home</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
            <NavLink className={styles.navlinks}  to='/shop'>Shop</NavLink>
            </ListItemText>
          </ListItem> <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
            <NavLink className={styles.navlinks}  to='/blog'>Blog</NavLink>
            </ListItemText>
          </ListItem> <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
            <NavLink className={styles.navlinks}  to='/about'>About</NavLink>
            </ListItemText>
          </ListItem> <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
            <NavLink className={styles.navlinks}  to='/contact'>Contact</NavLink>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default DrawerComponent;
