import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

//  POST @ /users/signup

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', newUser);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /users/login

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', userInfo);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /users/logout

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = '';
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
