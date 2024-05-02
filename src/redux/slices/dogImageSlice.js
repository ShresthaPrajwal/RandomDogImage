import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageUrl: '',
};

const dogImageSlice = createSlice({
  name: 'dogImage',
  initialState,
  reducers: {
    fetchRandomImage(state, action) {
        // console.log(action.payload)
      state.imageUrl = action.payload;
    },
  },
});

export const {fetchRandomImage} = dogImageSlice.actions

export default dogImageSlice.reducer;
