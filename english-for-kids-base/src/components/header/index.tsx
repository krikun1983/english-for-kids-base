import React from 'react';
import './header.scss';
import Nav from './nav';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Nav />
    </header>
  );
};

export default Header;
