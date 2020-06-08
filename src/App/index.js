import React from 'react';
import Particles from 'react-particles-js';

import particlesConfig from '../helpers/particels';
import Header from '../components/Header';
import Routes from '../routes';
import './app.css';

const navLinks = [];

const App = () => (
  <div className="app">
    <Header logo={'Covid-19 Tables'} navLinks={navLinks} />
    <div className="app-body">
      <Routes />
    </div>
  </div>
);

export default App;
