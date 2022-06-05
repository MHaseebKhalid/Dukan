import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authReducer from './authSlice/authSlice'

let reducer= combineReducers({ 
  authReducer
  });


export const store = configureStore({
  reducer
})