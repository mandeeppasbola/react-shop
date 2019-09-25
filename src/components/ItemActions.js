import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const ItemActions = ({ variant, data, addToCart, addToFav, removeFromCart, removeFromFav, moveToCart, moveToSaved, removeFromSaved }) => {
  const shopActions = (
    <>
      <IconButton aria-label="add to cart" onClick={() => addToCart(data)}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="add to favorites" onClick={() => addToFav(data)}>
        <FavoriteIcon />
      </IconButton>
    </>
  );

  const cartActions = (
    <>
      <IconButton aria-label="save for later" onClick={() => moveToSaved(data)}>
        <SaveAltIcon />
      </IconButton>
      <IconButton aria-label="remove from cart" onClick={() => removeFromCart(data.skuId)}>
        <DeleteForeverIcon />
      </IconButton>
    </>
  );

  const savedActions = (
    <>
      <IconButton aria-label="move to cart" onClick={() => moveToCart(data)}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="remove from saved" onClick={() => removeFromSaved(data.skuId)}>
        <DeleteForeverIcon />
      </IconButton>
    </>
  );

  const detailActions = (
    <>
      <IconButton aria-label="add to cart" onClick={() => addToCart(data)}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="add to favorites" onClick={() => addToFav(data)}>
        <FavoriteIcon />
      </IconButton>
    </>
  );

  const favActions = (
    <>
      <IconButton aria-label="move to cart" onClick={() => moveToCart(data)}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="remove from favorites" onClick={() => removeFromFav(data.skuId)}>
        <DeleteForeverIcon />
      </IconButton>
    </>
  );

  switch (variant) {
    case 'shop':
      return shopActions;
    case 'cart':
      return cartActions;
    case 'fav':
      return favActions;
    case 'saved':
      return savedActions;
    case 'detail':
      return detailActions;
  }
}

export default ItemActions;