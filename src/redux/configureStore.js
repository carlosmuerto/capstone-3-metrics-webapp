import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  details: detailsReducer,
  home: homeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
