import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper purple lighten-1">
            <Link to="/" className="brand-logo center">Drawing Something</Link>
            <ul className="left">
              <li><a href="#">Left</a></li>
            </ul>
            <ul className="right">
              <li><a href="#">Right</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;