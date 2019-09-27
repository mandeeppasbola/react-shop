import React from 'react';
import { Link } from 'react-router-dom';

export const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

export const isInArray = (arr, skuId) => (arr.includes(skuId));

export const removeFromObject = (obj, skuId) => {
  delete obj[skuId];
  return obj;
}