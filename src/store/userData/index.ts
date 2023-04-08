import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserData {
  email: string;
  token: string;
}

const slice = createSlice({
  name: 'userData',
  initialState: {
    email: '',
    token: '',
  },
  reducers: {
    setUserData(state, { type, payload }: PayloadAction<IUserData>) {
      console.log(type);
      return { ...state, ...payload };
    },
  },
});

export const { reducer: userDataReducer, name: userDataNameReducer, actions } = slice;
export const { setUserData } = actions;
