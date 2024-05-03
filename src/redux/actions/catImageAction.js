import { fetchRandomImage } from '../slices/catImageSlice';

export const fetchRandomCatImageAction = (imageUrl) => {
  return async (dispatch) => {
    dispatch(fetchRandomImage(imageUrl));
  };
};
