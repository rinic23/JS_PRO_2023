import { createSlice } from '@reduxjs/toolkit';
import { getPostList } from './effects';

interface IPostsState {
  posts: {
    data: any[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPostsState = {
  posts: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostList.pending, (state) => {
      return state;
    });
  },
});

export const { reducer: postsDataReducer, name: postsDataNameReducer } = slice;
