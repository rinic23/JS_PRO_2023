import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
  },
  devTools: true,
});
