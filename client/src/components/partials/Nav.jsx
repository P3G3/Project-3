import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul id="navbar">
          <li><Link to='/inventory' className="link">Inventory</Link></li>
          <li><Link to='/recipes' className="link">Recipes</Link></li>
          <li><Link to='/home' className="link">Home</Link></li>
        </ul>
      </nav>
    );
  };
}

export default Nav;
