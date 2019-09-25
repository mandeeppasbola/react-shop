import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import FavItem from './FavItem';

const Fav = ({ userFav, fav, addToCartThunk, removeFromFavThunk, getFavThunk }) => {
  useEffect(() => {
    getFavThunk(userFav);
  }, []);

  const moveToCart = (product) => {
    removeFromFavThunk(product.skuId);
    addToCartThunk(product);
  }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Favourites
            </Typography>
      <Grid container spacing={3}>
        {
          fav.map((data) => (
            <Grid item xs={12} sm={3} md={3} key={data.skuId}>
              <FavItem data={data} moveToCart={moveToCart} removeFromFav={removeFromFavThunk} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Fav;