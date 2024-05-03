import { fetchRandomImage } from '../slices/dogImageSlice';
import fetchImage from '../../services/api';
export const fetchRandomDogImageAction = (baseUrl) => {
  return async (dispatch) => {
    const newImage = await fetchImage(baseUrl);
    dispatch(fetchRandomImage(newImage));
  };
};
