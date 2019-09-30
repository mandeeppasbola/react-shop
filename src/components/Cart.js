import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SavedContainer from '../containers/Saved';
import SummaryContainer from '../containers/Summary';
import CartItem from './CartItem';

const Cart = ({
  userCart, cart, getCartThunk
}) => {

  useEffect(() => {
    getCartThunk(userCart);
  }, [userCart]);

  return (
    <>
      <div>
        <Typography variant="h4" component="h1">
          Cart
      </Typography>
        <Grid container spacing={3}>
          <Grid container item md={8}>
            {
              cart.map((data) => (
                <Grid item xs={12} key={data.skuId}>
                  <CartItem data={data} />
                </Grid>
              ))
            }
          </Grid>
          <Grid container item md={4}>
            <SummaryContainer />
          </Grid>
        </Grid>
      </div>
      <SavedContainer />
    </>
  )
}

export default Cart; 