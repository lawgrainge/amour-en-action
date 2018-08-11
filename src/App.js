import React, { Component } from 'react';
import { Router, Route } from 'react-static';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileMenu from './components/MobileMenu/MobileMenu';

import './app.css';

const navLinks = [
  { label: 'Home', to: '/', exact: true },
  { label: 'About Us', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Take Action', to: '/take-action' },
  { label: 'Contact', to: '/contact' }
];

class App extends Component {

  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({ 
      menuOpen: !this.state.menuOpen
    });
  }

  render() {

    const { menuOpen } = this.state;

    return (  
      <Router>
        <Route render={({ history }) => (
          <div className={ `app-wrapper ${ menuOpen ? 'app-wrapper--blur' : '' }` }>
          <Header links={ navLinks } toggleMenu={ this.toggleMenu } />
          <main role="main">
            <MobileMenu
              history={ history }
              links={ navLinks }
              isOpen={ menuOpen }
              closeMenu={ this.toggleMenu }
            />
            <div className="content">
              <Routes />
            </div>
          </main>
          <Footer links={ navLinks } />
        </div>
        )}/>
      </Router>
    )
  }
}

export default hot(module)(App)
