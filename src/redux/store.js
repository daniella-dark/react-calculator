import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import numberReducer from './slices/numberSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    number: numberReducer,
  },
});
