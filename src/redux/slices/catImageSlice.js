import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageUrl: '',
};

const catImageSlice = createSlice({
  name: 'catImage',
  initialState,
  reducers: {
    fetchRandomImage(state, action) {
      state.imageUrl = action.payload;
    },
  },
});

export const {fetchRandomImage} = catImageSlice.actions

export default catImageSlice.reducer;
