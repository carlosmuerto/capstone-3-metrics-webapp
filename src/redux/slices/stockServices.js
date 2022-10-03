import axios from 'axios';

const stockApi = `https://financialmodelingprep.com/api/v3/stock/list${apiKey}`;
const apiKey = 'cec71bb490150a3c8d68e3c66b2f0a02';

const GET_STOCKS = 'GET_STOCKS';
const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
const GET_STOCKS_ERROR = 'GET_STOCKS_ERROR';

const getStocks = () => async (dispatch) => {
  dispatch({ type: GET_STOCKS });
  try {
    const response = await axios.get(stockApi);
    dispatch({ type: GET_STOCKS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_STOCKS_ERROR, payload: error.message });
  }
};

export { getStocks, GET_STOCKS, GET_STOCKS_ERROR, GET_STOCKS_SUCCESS };
