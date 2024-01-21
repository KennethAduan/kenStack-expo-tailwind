// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import appSlice from './slices/appSlice';
import userSlice from './slices/userSlice';
const rootReducers = combineReducers({
  user: userSlice,
  app: appSlice,
});

export default rootReducers;
