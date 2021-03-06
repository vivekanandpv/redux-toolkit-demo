import { configureStore } from '@reduxjs/toolkit';
import { languageSlice } from './language-slice';
import { loginSlice } from './login-slice';
import { themeSlice } from './theme-slice';

export const appStore = configureStore({
  reducer: {
    language: languageSlice.reducer,
    theme: themeSlice.reducer,
    login: loginSlice.reducer,
  },
});
