import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Summary = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const getTotal = (total, { price }) => {
    const { salePrice, listPrice } = price;
    return total + (salePrice ? salePrice : listPrice);
  }
  useEffect(() => {
    const total = cart.reduce(getTotal, 0);
    setTotal(total);
  }, [cart]);

  return (
    <div>
      <Typography variant="h6" component="h3" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          Total
        </Grid>
        <Grid item xs={7}>
          {total}
        </Grid>
      </Grid>
    </div>
  )
}

export default Summary;