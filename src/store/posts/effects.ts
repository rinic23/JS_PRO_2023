import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../utils/network';

export const getPostList = createAsyncThunk('/post/list', async (_, { rejectWithValue }) => {
  try {
    const response = await networkInstance.get('/postsssss');
    console.log(response);
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
