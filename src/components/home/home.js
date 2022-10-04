import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterStocks } from '../../redux/home/home';
import { detailsStock } from '../../redux/slices/detailsServices';

const Home = () => {
  const state = useSelector((state) => state);
  const searched = useSelector((state) => state.stocks.stocks);
  const dispatch = useDispatch();

  const clickEvent = (e) => {
    const id_stock = e.target.id;
    window.scrollTo(0, 0);
    dispatch(detailsStock(id_stock));
  };

  const checkStocks = () => {
    if (searched.length === 0) {
      return (
        <div className="home__container">
          <h2 className="home__title">No stocks found</h2>
        </div>
      );
    }
    return (
      <div className="home__container">
        {searched.map((stock) => (
          <NavLink
            to="/details"
            className="home__link"
            key={stock.symbol}
            id={stock.symbol}
            onClick={clickEvent}
          >
            <div className="home__card">
              <h2 className="home__card--title">{stock.symbol}</h2>
              <h3 className="home__card--subtitle">{stock.name}</h3>
              <p className="home__card--text">{stock.exchange}</p>
            </div>
          </NavLink>
        ))}
      </div>
    );
  };

  const searchStocks = (e) => {
    dispatch(filterStocks(e.target.value));
  };

  return (
    <div className="home">
      <input
        type="text"
        className="home__input"
        placeholder="Search for a stock"
        onChange={searchStocks}
      />
      {checkStocks()}
    </div>
  );
};

export default Home;
