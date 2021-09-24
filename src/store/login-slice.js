import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'loginStatus',
  initialState: false,
  reducers: {
    login: (state) => (state = true),
    logout: (state) => (state = false),
  },
});
