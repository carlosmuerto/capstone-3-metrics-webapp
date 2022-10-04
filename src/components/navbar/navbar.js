import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { restoreStocks } from '../../redux/home/home';
import { MdKeyboardArrowLeft, MdSearch } from 'react-icons/md';
import { GoGear } from 'react-icons/go';

const Navbar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const returnClick = () => {
    dispatch(restoreStocks(state));
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-link" onClick={returnClick}>
        <MdKeyboardArrowLeft className="navbar-icon" />
      </NavLink>
      <h2 className="navbar-title">Stock Market WebApp</h2>
      <div className="navbar-search">
        <MdSearch className="navbar-icon" />
        <GoGear className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
