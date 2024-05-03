import { fetchRandomImage } from '../slices/catImageSlice';
import fetchImage from '../../services/api';


export const fetchRandomCatImageAction = (baseUrl) => {
  return async (dispatch) => {
    const newImage = await fetchImage(baseUrl)
    dispatch(fetchRandomImage(newImage));
  };
};
