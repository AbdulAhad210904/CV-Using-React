import React from 'react';
import './style.css';

const Header = ({ name, email, website, mobile }) => (
  <div className="header">
    <h1>{name}</h1>
    <p>Email: {email}</p>
    <p>Website: {website}</p>
    <p>Mobile: {mobile}</p>
  </div>
);

export default Header;
