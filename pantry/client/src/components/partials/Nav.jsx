import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/inventory'>Inventory</Link></li>
          <li><Link to='/recipes'>Recipes</Link></li>
          <li><Link to='/home'>Home</Link></li>
        </ul>
      </nav>
    );
  };
}

export default Nav;
