import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
  },
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
