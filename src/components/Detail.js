import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ItemActions from './ItemActions';
import ItemPrices from './ItemPrices';

const useStyles = makeStyles(theme => ({
  actions: {
    marginTop: theme.spacing(4),
  }
}));

const Detail = ({ match, product, getDetailsThunk, addToCartThunk, addToFavThunk, removeFromFavThunk }) => {
  const classes = useStyles();
  useEffect(() => {
    getDetailsThunk(match.params.id);
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          {product.images ? <img src={product.images[0]} title={product.title} /> : null}
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.details}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.title}
            </Typography>
            <ItemPrices data={product} />
            <Typography variant="p" component="p" gutterBottom>
              {product.description}
            </Typography>
          </div>
          <div className={classes.actions}>
            <ItemActions variant="detail" data={product} addToCart={addToCartThunk} addToFav={addToFavThunk} removeFromFav={removeFromFavThunk} />
          </div>
        </Grid>
        <Grid item xs={12} sm={2}>

        </Grid>
      </Grid>
    </div>
  )
}

export default Detail; 