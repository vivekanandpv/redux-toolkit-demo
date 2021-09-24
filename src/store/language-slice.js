import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: 'English',
  reducers: {
    setLanguage: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
