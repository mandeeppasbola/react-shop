import React from 'react';

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
  media: {
    height: 0,
    paddingTop: '100%'
  }
}));

const FavItem = ({ data }) => {
  const classes = useStyles();

  return (
    <Card>
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
        <ItemActionsContainer variant='fav' data={data} />
        <Button aria-label="view details" component={AdapterLink} to={`/detail/${data.skuId}`}>
          View
        </Button>
      </CardActions>
    </Card>
  )
}

export default FavItem;