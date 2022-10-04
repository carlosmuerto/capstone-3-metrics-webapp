import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { restoreStocks } from '../../redux/home/home';

const Navbar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const returnClick = () => {
    dispatch(restoreStocks(state.stocks.stocks));
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__link" onClick={returnClick}>
        <MdKeyboardArrowLeft className="navbar__icon" />
      </NavLink>
      <h2 className="navbar__title">Stock Market WebApp</h2>
      <div className="navbar__search">
        <MdSearch className="navbar__icon" />
      </div>
    </nav>
  );
};

export default Navbar;
