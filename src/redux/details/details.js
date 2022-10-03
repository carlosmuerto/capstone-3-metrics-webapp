import { GET_DETAILS, GET_STOCK, GET_DETAILS_ERROR } from './detailsServices';

const initialState = {
  details: [
    {
      symbol: '',
      name: '',
      exchange: '',
      price: 0,
      previousClose: 0,
      changesPercentage: '',
      dayHigh: 0,
      dayLow: 0,
      yearHigh: 0,
      yearLow: 0,
    },
  ],
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK:
      return { ...state, pending: false, details: action.payload };
    case GET_DETAILS:
      return { ...state, pending: true };
    case GET_DETAILS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};

export default detailsReducer;
