import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ShopItem from './ShopItem';

const Shop = ({ products, getProductsThunk, addToCartThunk, addToFavThunk, removeFromFavThunk, setNotificationAction }) => {
  useEffect(() => {
    getProductsThunk({});
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={3}>
        {
          products.map((data) => (
            <Grid item xs={12} sm={3} md={3} key={data.skuId}>
              <ShopItem data={data} addToCart={addToCartThunk} addToFav={addToFavThunk} removeFromFav={removeFromFavThunk} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Shop;