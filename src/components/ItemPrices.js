import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '100%'
  },
  cross: {
    textDecoration: 'line-through',
    marginRight: '10px'
  }
}));

const ItemPrices = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" component="h6">
        <span className={data.price.salePrice ? classes.cross : ''}>
          {data.price.listPrice}
        </span>
        <span>
          {data.price.salePrice}
        </span>
      </Typography>
    </>
  )
}

export default ItemPrices;