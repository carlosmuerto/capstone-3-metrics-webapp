import axios from 'axios';

const detailsApi = 'https://financialmodelingprep.com/api/v3/quote/';
const apiKey = 'cec71bb490150a3c8d68e3c66b2f0a02';

const GET_DETAILS = 'GET_DETAILS';
const GET_STOCK = 'GET_STOCK';
const GET_DETAILS_ERROR = 'GET_DETAILS_ERROR';

const initialState = {
  stock: [],
  details: [],
  error: '',
};

const getStock = (stock) => async (dispatch) => {
  try {
    const response = await axios.get(`${detailsApi}${stock}?apikey=${apiKey}`);
    dispatch({
      type: GET_STOCK,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DETAILS_ERROR,
      payload: error,
    });
  }
};

const getDetails = (stock) => async (dispatch) => {
  try {
    const response = await axios.get(`${detailsApi}${stock}?apikey=${apiKey}`);
    dispatch({
      type: GET_DETAILS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DETAILS_ERROR,
      payload: error,
    });
  }
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK:
      return {
        ...state,
        stock: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export { getStock, getDetails };
export default detailsReducer;
