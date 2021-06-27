import React from 'react';
import './nav.scss';

const Nav = (): JSX.Element => {
  const clickHandler = (): void => {
    const burgerClick = document.querySelector(
      '.burger-header__lines',
    ) as HTMLDivElement;
    const header = document.querySelector('.nav-header') as HTMLElement;
    burgerClick.classList.toggle('burger-header-active');
    header.classList.toggle('nav-header-show');
  };

  return (
    <>
      <button type="button" onClick={clickHandler} className="burger-header">
        <span className="burger-header__lines" />
      </button>
      <nav className="nav-header">
        <ul className="menu-header">
          <li className="menu-header__item">
            <a className="menu-header__link menu-header__link_active" href="/">
              Main Page
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/action_a">
              Action (set A)
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/action_b">
              Action (set B)
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/action_c">
              Action (set C)
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/adjective">
              Adjective
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/animal_a">
              Animal (set A)
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/animal_b">
              Animal (set B)
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/clothes">
              Clothes
            </a>
          </li>
          <li className="menu-header__item">
            <a className="menu-header__link" href="/emotion">
              Emotion
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
