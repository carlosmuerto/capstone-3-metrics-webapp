import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterStocks } from '../../redux/home/home';
import { detailsStock } from '../../redux/slices/detailsServices';

const Home = () => {
const state = useSelector((state) => state.homeReducer.stocks);
const dispatch = useDispatch();

const clickEvent = (e) => {
  const id_stock = e.target.id;
  window.scrollTo(0, 0);
  dispatch(detailsStock(id_stock));
};

const searchStock = (e) => {
  const savedStocks = state.slice(0, 12);
  const newArray = [state[0]];
  state.slice(1, 12).forEach((stock) => {
    if (stock.symbol.includes(e.target.value.toUpperCase())) {
      newArray.push(stock);
    }
  });
  if (newArray.length === 1) {
    dispatch(filterStocks(savedStocks));
  } else {
    dispatch(filterStocks(newArray));
  }
};

const mainStock = state.slice(0, 1).map((stock) => (
  <div key={stock.symbol} className="stock-container">
    <NavLink to={`/${stock.symbol}`} id={stock.symbol} className="stock-link" onClick={clickEvent}>
      {stock.symbol}: ${stock.price.toFixed(2)}
    </NavLink>
    <p className="stock-name">{stock.name}</p>
  </div>
));

const displayFiltered = state.slice(1, 12).map((stock) => (
  <NavLink to={`/${stock.symbol}`} id={stock.symbol} className="stock-link" onClick={clickEvent} key={stock.symbol}>
    {stock.symbol}: ${stock.price.toFixed(2)}
    <p className="stock-name">{stock.name}</p>
  </NavLink>
));

const displayStocks = state.slice(1, 12).map((stock) => (
  <NavLink to={`/${stock.symbol}`} id={stock.symbol} className="stock-link" onClick={clickEvent} key={stock.symbol}>
    {stock.symbol}: ${stock.price.toFixed(2)}
    <p className="stock-name">{stock.name}</p>
  </NavLink>
));

return (
  <div className="home-container">
    <div className="home-main">
      {mainStock}
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" onChange={searchStock} />
      </div>
    </div>
    {state.length > 12 ? displayFiltered : displayStocks}
  </div>
);
};

export default Home;
