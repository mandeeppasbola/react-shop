import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemActionsContainer from '../containers/ItemActions';
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

const CartItem = ({ data }) => {
  const classes = useStyles();
  const { sellPrice, listPrice, quantity } = data;
  const price = sellPrice ? sellPrice : listPrice;
  const [total, setTotal] = useState(price);

  useEffect(() => {
    const total = price * quantity;
    setTotal(total);
  }, [quantity]);

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
          <ItemActionsContainer variant='cart' data={data} />
          <Button aria-label="view details" component={AdapterLink} to={`/detail/${data.skuId}`}>
            View
          </Button>
        </CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          {total}
        </Typography>
      </div>
    </Card>
  )
}

export default CartItem;