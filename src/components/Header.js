import React from 'react';
import logo from './../images/header__logo.svg';
import NavBar from './NavBar';

function Header({ loggedIn, isNavOpened, onClickNav }) {
  return (
    <header className={`header ${isNavOpened && 'header_margin_top'}`}>
      <img src={logo} alt="Место в России" className="header__logo" />
      <NavBar
        loggedIn={loggedIn}
        onClickNav={onClickNav}
        isNavOpened={isNavOpened}
      />
    </header>
  );
}

export default Header;