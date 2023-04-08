import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserData {
  name: string;
  token: string;
}

const slice = createSlice({
  name: 'userData',
  initialState: {
    name: '',
    token: '',
  },
  reducers: {
    setUserData(state, { type, payload }: PayloadAction<IUserData>) {
      console.log(type);
      return { ...state, ...payload };
    },
  },
});
