import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import cards from '../../../constants/cards';
import { nameMainPages, pathMainPages } from '../../../constants/pages';
import useTypeSelector from '../../../hooks/useTypeSelector';
import '../pages-all.scss';
import './main-page.scss';

const MainPage = (): JSX.Element => {
  const firstImagePageCategory = 0;
  const { isToggle } = useTypeSelector(state => state.isToggle);
  return (
    <div className="main-wrapper">
      <div className="main-wrapper__cards">
        {pathMainPages.map((card, index) => {
          return (
            <Link key={uuid()} to={card}>
              <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
                <img src={cards[nameMainPages[index]][firstImagePageCategory].image} alt="" />
                <p>{nameMainPages[index]}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
