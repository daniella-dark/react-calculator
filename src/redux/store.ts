import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/slice';
import colorReducer from './color/slice'
import numberReducer from './number/slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    color: colorReducer,
    number: numberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>