import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { restClient } from '../services/rest-service';

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (id, thunk) => {
    //    thunk object provides the api necessary for decision support
    //    we can get the current state, chain the promises using dispatch, etc
    //    get the currentUser by destructuring
    const {
      user: { currentUser },
    } = thunk.getState();

    //    initiate the HTTP call only if the current user is falsy (null/undefined)
    if (!currentUser) {
      const httpResponse = await restClient.get(`users/${id}`);
      return httpResponse.data;
    }

    //    otherwise, there is no need to make a call
    return Promise.resolve({
      notRequired: true,
    });
  }
);

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    status: null,
  },
  reducers: {
    //... regular reducers here
  },
  extraReducers: {
    [getUserById.fulfilled]: (state, action) => {
      //    if notRequired is true, there is nothing for this reducer to do
      if (!action.payload.notRequired) {
        state.currentUser = action.payload.data; // from axios
        state.status = 'succeeded';
      }
    },
    [getUserById.rejected]: (state, action) => {
      state.status = 'errored';
    },
    [getUserById.pending]: (state, action) => {
      state.status = 'loading';
    },
  },
});
