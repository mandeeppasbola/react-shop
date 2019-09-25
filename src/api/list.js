import { listData } from '../data/';

export const getProductsApi = ({ skuIdArr, categoryId }) => (
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(listData);
    }, 300);
  })
);