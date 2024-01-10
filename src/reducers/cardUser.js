/* eslint-disable prettier/prettier */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//create thunk
export const getDataUser = createAsyncThunk(
  'user/getDataUser',
  async (param, thunkAPI) => {
    const response = await axios.get('https://dummyjson.com/users/1');
    return response.data;
  },
);

const cardUser = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDataUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getDataUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    });
  },
});

export default cardUser.reducer;
