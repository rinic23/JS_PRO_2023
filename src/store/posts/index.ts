import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const { reducer: postsDataReducer, name: postsDataNameReducer } = slice;
