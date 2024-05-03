import { configureStore } from '@reduxjs/toolkit';
import dogImageReducer from './slices/dogImageSlice'; 
import baseUrlReducer from './slices/baseUrlSlice'
import catImageReducer from './slices/catImageSlice'
const store = configureStore({
  reducer: {
    dogImage: dogImageReducer,
    catImage: catImageReducer,
    baseUrl: baseUrlReducer,
  },
});

export default store;