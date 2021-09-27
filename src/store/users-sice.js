import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { restClient } from '../services/rest-service';

//  asynchronous action creators are called thunks
//  they are named: slice-name/thunk-name
//  A function that accepts a Redux action type string
//  and a callback function that should return a promise.
//  It generates promise lifecycle action types based
//  on the action type prefix that you pass in, and returns
//  a thunk action creator that will run the promise callback
//  and dispatch the lifecycle actions based on the returned promise.
export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (id, thunk) => {
    //    async callbacks can take only one argument
    //    consider using objects in case you have to pass multiple arguments
    const httpResponse = await restClient.get(`users/${id}`);
    return httpResponse.data;
  }
);

export const usersSlice = createSlice({
  name: 'user',
  //  if the initial state is an elaborate object,
  //  then the mutation- approach of immer.js can be employed
  initialState: {
    currentUser: null,
    status: null,
  },
  reducers: {
    //... regular reducers here
  },
  //    thunk reducers go here
  extraReducers: {
    //    computed property names
    //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    //    three possibilities: pending, fulfilled, and rejected
    [getUserById.fulfilled]: (state, action) => {
      //    mutation-approach of immer.js
      state.currentUser = action.payload.data;
      state.status = 'succeeded';
    },
    [getUserById.rejected]: (state, action) => {
      state.status = 'errored';
    },
    [getUserById.pending]: (state, action) => {
      state.status = 'loading';
    },
  },
});
