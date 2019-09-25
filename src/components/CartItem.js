import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemActions from './ItemActions';
import ItemPrices from './ItemPrices';

import { AdapterLink } from '../utilities';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: '15px'
  },
  cardWrapper: {
    display: 'flex'
  },
  media: {
    height: '150px',
    width: '150px'
  }
}));

const CartItem = ({ data, moveToSaved, removeFromCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.cardWrapper}>
        <CardMedia
          className={classes.media}
          image={data.images[0]}
          title={data.title}
        />
        <CardContent>
          <ItemPrices data={data} />
          <Typography variant="h5" component="h5">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.shortDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ItemActions variant='cart' data={data} moveToSaved={moveToSaved} removeFromCart={removeFromCart} />
          <Button aria-label="view details" component={AdapterLink} to={`/detail/${data.skuId}`}>
            View
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}

export default CartItem;