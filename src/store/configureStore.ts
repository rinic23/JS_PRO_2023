import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';
import { productsDataNameReducer, productsDataReducer } from './products';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
    [productsDataNameReducer]: productsDataReducer,
  },
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
