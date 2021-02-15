import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
  <div className="main-content not-found">
    <h2>Page Not Found</h2>
    <Link to="/">Back</Link>
  </div>
);

export default NotFound;