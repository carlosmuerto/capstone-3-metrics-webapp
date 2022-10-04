import { GET_DETAILS, GET_DETAILS_SUCCESS, GET_DETAILS_ERROR } from '../slices/detailsServices';

const initialState = {
  details: [
    {
      symbol: '',
      name: 'loading',
      exchange: '',
      price: 0,
      previousClose: 0,
      changePercentage: '',
      dayHigh: 0,
      dayLow: 0,
      yearHigh: 0,
      yearLow: 0,
    },
  ],
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        pending: true,
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        details: action.details,
      };
    case GET_DETAILS_ERROR:
      return {
        ...state,
        pending: false,
        details: action.payload,
      };
    default:
      return state;
  }
};
