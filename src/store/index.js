import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './userRedux';

const store = configureStore({
  reducer: rootReducer,
});

export default store;