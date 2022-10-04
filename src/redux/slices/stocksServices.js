import axios from 'axios';

const apiKey = '?apikey=cec71bb490150a3c8d68e3c66b2f0a02';
//                https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=cec71bb490150a3c8d68e3c66b2f0a02
const stockApi = `https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists${apiKey}`;

const GET_STOCKS = 'GET_STOCKS';
const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
const GET_STOCKS_ERROR = 'GET_STOCKS_ERROR';

const getStocks = () => async (dispatch) => {
  dispatch({ type: GET_STOCKS });
  try {
    const response = await axios.get(stockApi);
    const { data } = response;
    dispatch({ type: GET_STOCKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_STOCKS_ERROR, payload: error.message });
  }
};

export {
  getStocks, GET_STOCKS, GET_STOCKS_ERROR, GET_STOCKS_SUCCESS,
};
