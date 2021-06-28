import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.scss';

const Nav = (): JSX.Element => {
  const [isMenuShow, setMenuShow] = useState<boolean>(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuShow(!isMenuShow)}
        className="burger-header"
      >
        <div
          className={`burger-header__lines ${
            isMenuShow ? 'burger-header-active' : ''
          }`}
        />
      </button>
      <nav className={`nav-header ${isMenuShow ? 'nav-header-show' : ''}`}>
        <ul className="menu-header">
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.endsWith('/') ? 'menu-header__link_active' : ''
              }`}
              to="/"
            >
              Main Page
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/action_a')
                  ? ''
                  : 'menu-header__link_active'
              }`}
              to="/action_a"
            >
              Action (set A)
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/action_b')
                  ? ''
                  : 'menu-header__link_active'
              }`}
              to="/action_b"
            >
              Action (set B)
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/action_c')
                  ? ''
                  : 'menu-header__link_active'
              }`}
              to="/action_c"
            >
              Action (set C)
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/adjective')
                  ? ''
                  : 'menu-header__link_active'
              }`}
              to="/adjective"
            >
              Adjective
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/animal_a')
                  ? ''
                  : 'menu-header__link_active'
              }`}
              to="/animal_a"
            >
              Animal (set A)
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/animal_b')
                  ? ''
                  : 'menu-header__link_active'
              }`}
              to="/animal_b"
            >
              Animal (set B)
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/clothes') ? '' : 'menu-header__link_active'
              }`}
              to="/clothes"
            >
              Clothes
            </Link>
          </li>
          <li className="menu-header__item">
            <Link
              onClick={() => setMenuShow(!isMenuShow)}
              className={`menu-header__link ${
                currentPath.search('/emotion') ? '' : 'menu-header__link_active'
              }`}
              to="/emotion"
            >
              Emotion
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
