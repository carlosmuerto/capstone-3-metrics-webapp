import axios from 'axios';

const apiKey = '?apikey=cec71bb490150a3c8d68e3c66b2f0a02';
const detailsApi = 'https://financialmodelingprep.com/api/v3/quote/';

const GET_DETAILS = 'GET_DETAILS';
const GET_DETAILS_SUCCESS= 'GET_DETAILS_SUCCESS';
const GET_DETAILS_ERROR = 'GET_DETAILS_ERROR';

const detailsStock = (symbol) => async (dispatch) => {
  dispatch({ type: GET_DETAILS });
  try {
    const response = await axios.get(`${detailsApi}${symbol}?apikey=${apiKey}`);
    dispatch({ type: GET_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_DETAILS_ERROR, payload: error.message });
  }
};

export { detailsStock, GET_DETAILS, GET_DETAILS_ERROR, GET_DETAILS_SUCCESS };
