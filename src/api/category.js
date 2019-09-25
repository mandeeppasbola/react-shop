import { listData } from '../data/';

export const getCategoriesApi = () => (
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(listData);
    }, 300);
  })
);