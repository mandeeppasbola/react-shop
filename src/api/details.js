import { detailData } from '../data/';

export const getDetailsApi = (skuId) => (
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(detailData);
    }, 300);
  })
);