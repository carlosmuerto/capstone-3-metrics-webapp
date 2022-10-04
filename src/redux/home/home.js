import { GET_STOCKS, GET_STOCKS_SUCCESS, GET_STOCKS_ERROR } from '../slices/stocksServices';

const initialState = { stocks: [], pending: false, error: null };

const FILTER_STOCKS = 'FILTER_STOCKS';
const RESTORE_STOCKS = 'RESTORE_STOCKS';

const restoreStocks = (payload) => ({ type: RESTORE_STOCKS, payload });

const filterStocks = (newArray, savedStocks) => ({ type: FILTER_STOCKS, payload: [newArray, savedStocks] });

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        pending: true,
      };
    case GET_STOCKS_SUCCESS:
      {
        const data = action.stocks;
        const subset = [];
        data.map((stock) => {
          subset.push({
            symbol: stock.symbol,
            price: stock.price,
            name: stock.name,
            exchange: stock.exchangeShortName,
          });
        });
        return { 
          ...state,
          pending: false,
          stocks: subset,
        };
      }
    case GET_STOCKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case FILTER_STOCKS:
      return {
        ...state,
        pending: false,
        stocks: action.payload[0],
        savedStocks: action.payload[1],
      };
    case RESTORE_STOCKS:
      return {
        ...state,
        pending: false,
        stocks: action.payload,
      };
    default:
      return state;
  }
};

export { homeReducer, filterStocks, restoreStocks };
