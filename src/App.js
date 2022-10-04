import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/home/home';
import Details from './components/details/details';
import Navbar from './components/navbar/navbar';
import store from './redux/configureStore';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getStocks());
  }, []);

const state = useSelector((state) => state.homeReducer);
const stocksList = state.slice(0, 12);

return (
    <Provider store={store}>
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home stocksList={stocksList} />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
