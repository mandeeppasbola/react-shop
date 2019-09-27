import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { notifications } from '../constants';
import { isInArray } from '../utilities';

const ItemActions = ({
  variant, data, cart, fav, saved,
  addToCartThunk, addToFavThunk, addToSavedThunk, removeFromCartThunk, removeFromFavThunk, removeFromSavedThunk, setQuantityThunk,
  setNotificationAction
}) => {

  const addToCart = () => {
    if (!isInArray(cart, data.skuId)) {
      addToCartThunk(data, true);
    } else {
      setNotificationAction(notifications.alreadyInCartError);
    }
  }

  const addToFav = () => {
    if (!isInArray(fav, data.skuId)) {
      addToFavThunk(data, true);
    } else {
      setNotificationAction(notifications.alreadyInFavError);
    }
  }

  const moveToCart = () => {
    if (!isInArray(cart, data.skuId)) {
      addToCartThunk(data, false);
      removeFromSavedThunk(data.skuId, false);
      setNotificationAction(notifications.moveToCartSuccess);
    } else {
      setNotificationAction(notifications.alreadyInCartError);
    }
  }

  const moveToSaved = () => {
    if (!isInArray(saved, data.skuId)) {
      addToSavedThunk(data, false);
      removeFromCartThunk(data.skuId, false);
      setNotificationAction(notifications.moveToSavedSuccess);
    } else {
      setNotificationAction(notifications.alreadyInSavedError);
    }
  }

  const handleQuantityChange = (e) => {
    const quantity = e.target.value;
    if (quantity > 0) {
      setQuantityThunk(data.skuId, quantity);
    }
  }

  const shopActions = (
    <>
      <IconButton aria-label="add to cart" onClick={addToCart}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="add to favorites" onClick={addToFav}>
        <FavoriteIcon />
      </IconButton>
    </>
  );

  const cartActions = (
    <>
      <Input type="number" value={quantity} onChange={(e) => handleQuantityChange(e)} />
      <IconButton aria-label="save for later" onClick={moveToSaved}>
        <SaveAltIcon />
      </IconButton>
      <IconButton aria-label="remove from cart" onClick={() => removeFromCartThunk(data.skuId, true)}>
        <DeleteForeverIcon />
      </IconButton>
    </>
  );

  const savedActions = (
    <>
      <IconButton aria-label="move to cart" onClick={moveToCart}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="remove from saved" onClick={() => removeFromSavedThunk(data.skuId, true)}>
        <DeleteForeverIcon />
      </IconButton>
    </>
  );

  const detailActions = (
    <>
      <IconButton aria-label="add to cart" onClick={addToCart}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="add to favorites" onClick={addToFav}>
        <FavoriteIcon />
      </IconButton>
    </>
  );

  const favActions = (
    <>
      <IconButton aria-label="move to cart" onClick={moveToCart}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton aria-label="remove from favorites" onClick={() => removeFromFavThunk(data.skuId, true)}>
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