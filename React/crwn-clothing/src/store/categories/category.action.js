import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => {
  return {
    type: 'FETCH_CATEGORIES_START',
  };
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: categoriesArray,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: 'FETCH_CATEGORIES_FAILED',
    payload: error,
  };
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocument();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
