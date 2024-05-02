import { fetchRandomImage } from "../slices/dogImageSlice";

export const fetchRandomDogImageAction = (imageUrl)=>{
    return async dispatch=>{
        dispatch(fetchRandomImage(imageUrl))
    }
}
