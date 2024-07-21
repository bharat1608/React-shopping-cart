import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Shop Homepage</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>Cart ({cartCount})</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

