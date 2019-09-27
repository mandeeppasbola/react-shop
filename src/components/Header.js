import React, { useEffect } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { AdapterLink } from '../utilities';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

const Header = ({ cart, fav, category, getUserThunk, getCategoryThunk }) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    getUserThunk();
    getCategoryThunk();
  }, []);

  const [open, setOpen] = React.useState(false);

  const orderCount = Object.keys(cart).length;
  const favCount = fav.length;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header className={classes.root}>
      <AppBar color="#ccc">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="show home" component={AdapterLink} to={`/`}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
          <IconButton aria-label="show cart" color="inherit" component={AdapterLink} to={`/fav`}>
            <Badge badgeContent={favCount} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show cart" color="inherit" component={AdapterLink} to={`/cart`}>
            <Badge badgeContent={orderCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {category && category.map((cat, index) => (
            <ListItem button key={cat.id}>
              <ListItemText primary={cat.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </header>
  )
}

export default Header;