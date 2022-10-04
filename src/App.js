import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import Home from './components/home/home';
import Details from './components/details/details';
import Navbar from './components/navbar/navbar';
import store from './redux/configureStore';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getStocks());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
