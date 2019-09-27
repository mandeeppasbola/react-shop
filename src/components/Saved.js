import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SavedItem from './SavedItem';

const Saved = ({ userSaved, saved, getSavedThunk }) => {

  useEffect(() => {
    getSavedThunk(userSaved);
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Saved for later
      </Typography>
      <Grid container spacing={3}>
        <Grid container item md={8}>
          {
            saved.map((data) => (
              <Grid item xs={12} key={data.skuId}>
                <SavedItem data={data} />
              </Grid>
            ))
          }
        </Grid>
        <Grid container item md={4}>
        </Grid>
      </Grid>
    </div>
  )
}

export default Saved; 