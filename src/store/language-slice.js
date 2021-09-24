import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'theme',
  initialState: 'English',
  reducers: {
    setLanguage: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
