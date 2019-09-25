import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
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

import { AdapterLink } from '../utilities';

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
}));

const Header = ({ cart, fav }) => {
  const classes = useStyles();

  const orderCount = cart.length;
  const favCount = fav.length;
  return (
    <header className={classes.root}>
      <AppBar color="#ccc">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
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
    </header>
  )
}

export default Header;