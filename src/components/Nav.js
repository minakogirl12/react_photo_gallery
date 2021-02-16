import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav () {
    return(
        <nav class="main-nav">
        <ul>
          <li><NavLink to="/cats">Cats</NavLink></li>
          <li><NavLink to="/waterfalls">Waterfalls</NavLink></li>
          <li><NavLink to="/computers">Computers</NavLink></li>
          <li><NavLink to="/pizza">Pizza</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;