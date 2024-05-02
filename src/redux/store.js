import { configureStore } from '@reduxjs/toolkit';
import dogImageReducer from './slices/dogImageSlice'; 

const store = configureStore({
  reducer: {
    dogImage: dogImageReducer,
  },
});

export default store;