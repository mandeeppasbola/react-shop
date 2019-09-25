import React from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default function Thankyou() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Thankyou
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link to="/">Home</Link>
        </Grid>
      </Grid>
    </div>
  )
}