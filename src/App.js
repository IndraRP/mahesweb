import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './page/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './index.css';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Home/>
        <Footer/>
    </Router>
  );
};

export default App;
