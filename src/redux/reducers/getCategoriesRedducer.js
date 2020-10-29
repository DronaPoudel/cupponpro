import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from '../actions/Types';

// initial state run first
const initialState = {
  fetching: false,
  success: false,
  failure: false,
  categories: [],
  message: null,
};

export const getCategories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        success: true,
        failure: false,
        categories: action.resPayload.category,
      };

    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        fetching: false,
        success: false,
        failure: true,
        categories: [],
        message: action.resPayload.message,
      };

    default:
      return {
        ...state,
      };
  }
};
