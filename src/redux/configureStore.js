import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { homeReducer } from './home/home';
import detailsReducer from './details/details';

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
  middleware: [thunk],
});

export default store;
