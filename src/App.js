import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './app.css';

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Header />
      <main role="main">
        <div className="content">
          <Routes />
        </div>
      </main>
      <Footer />
    </div>
  </Router>
)

export default hot(module)(App)
