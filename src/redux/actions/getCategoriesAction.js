import { GET_CATEGORIES_REQUEST } from './Types';

export const getCategories = (data) => {
  return {
    type: GET_CATEGORIES_REQUEST,
    payload: data,
  };
};
