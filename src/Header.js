import './Header.css';
import React from 'react';
import UserInfo from './UserInfo';

function Header() {
  return (
    <header className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="#">React Context</a>
          <UserInfo />
        </div>
    </header>
  );
}

export default Header;