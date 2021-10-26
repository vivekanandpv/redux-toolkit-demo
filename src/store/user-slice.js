import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    first_name: 'Default',
    last_name: 'Default',
    email: 'default_email',
    avatar: '',
    index: -1,
  },
  reducers: {
    replaceUser: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.index = action.payload.index;
    },
  },
});
