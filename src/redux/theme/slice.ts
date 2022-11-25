import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTheme } from '../../utils/getTheme';

const initialState: string = getTheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
