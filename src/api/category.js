import { categoryData } from '../data/';

export const getCategoryApi = () => (
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(categoryData);
    }, 300);
  })
);