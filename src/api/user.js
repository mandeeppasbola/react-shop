import { userData } from '../data/';

export const getUserApi = (userId) => (
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(userData);
    }, 300);
  })
);