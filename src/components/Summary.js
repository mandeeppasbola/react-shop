import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { AdapterLink } from '../utilities';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    alignSelf: 'flex-start'
  }
}));

const Summary = ({ cart }) => {
  const classes = useStyles();

  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const getSubTotal = (subTotal, { price }) => {
    const { salePrice, listPrice } = price;
    return subTotal + (salePrice ? salePrice : listPrice);
  }

  useEffect(() => {
    const subTotal = cart.reduce(getSubTotal, 0);
    setSubTotal(subTotal);
    const total = subTotal + shipping + tax;
    setTotal(total);
  }, [cart]);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          Summary
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              Items
            </Grid>
            <Grid item xs={7}>
              {cart.length}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              SubTotal
            </Grid>
            <Grid item xs={7}>
              {subTotal}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              Shipping
            </Grid>
            <Grid item xs={7}>
              {shipping}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              Tax
            </Grid>
            <Grid item xs={7}>
              {tax}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              Total
            </Grid>
            <Grid item xs={7}>
              {total}
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button aria-label="shop" component={AdapterLink} to="/shop">
          Continue Shopping
        </Button>
        <Button aria-label="checkout" component={AdapterLink} to="/checkout" disabled={cart.length === 0}>
          Checkout
        </Button>
      </CardActions>
    </Card>
  )
}

export default Summary;