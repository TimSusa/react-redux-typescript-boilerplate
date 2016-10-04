import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component<any, any> {
  public render() {
    // const s = require('./style.css');

    return (
      <nav id="myNavbar" className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SearchSpotifySearch!</a>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="search">Search</Link></li>
              <li><Link to="counter">Counter</Link></li>
              <li><Link to="stars">Stars</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export { Header }
