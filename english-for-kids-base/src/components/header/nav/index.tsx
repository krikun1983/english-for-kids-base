import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import uuid from 'react-uuid';
import { namePages, pathPages } from '../../../constants/pages';
import './nav.scss';

const Nav = (): JSX.Element => {
  const [isMenuShow, setMenuShow] = useState<boolean>(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <button type="button" onClick={() => setMenuShow(!isMenuShow)} className="burger-header">
        <div className={`burger-header__lines ${isMenuShow ? 'burger-header-active' : ''}`} />
      </button>
      <nav className={`nav-header ${isMenuShow ? 'nav-header-show' : ''}`}>
        <ul className="menu-header">
          {pathPages.map((path, index): JSX.Element => {
            return (
              <li key={uuid()} className="menu-header__item">
                <Link
                  onClick={() => setMenuShow(!isMenuShow)}
                  className={`menu-header__link ${currentPath.endsWith(path) ? 'menu-header__link_active' : ''}`}
                  to={path}
                >
                  {namePages[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {isMenuShow}
      <div
        className={`menu-close ${isMenuShow ? '' : 'hidden'}`}
        onClick={() => setMenuShow(!isMenuShow)}
        role="presentation"
      />
    </>
  );
};

export default Nav;
