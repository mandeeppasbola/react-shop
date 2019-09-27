import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" component="h1">
        Home
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link to="/shop">List</Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;