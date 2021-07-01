import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../../../cards';
import useTypeSelector from '../../../hooks/useTypeSelector';
import './main-page.scss';

const MainPage = (): JSX.Element => {
  const { isToggle } = useTypeSelector(state => state.isToggle);

  return (
    <div className="main-wrapper">
      <Link to="/action_a">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[0][0].image} alt="" />
          <p>Action (set A)</p>
        </div>
      </Link>
      <Link to="/action_b">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[1][0].image} alt="" />
          <p>Action (set B)</p>
        </div>
      </Link>
      <Link to="/action_c">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[2][0].image} alt="" />
          <p>Action (set C)</p>
        </div>
      </Link>
      <Link to="/adjective">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[3][0].image} alt="" />
          <p>Adjective</p>
        </div>
      </Link>
      <Link to="/animal_a">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[4][0].image} alt="" />
          <p>Animal (set A)</p>
        </div>
      </Link>
      <Link to="/animal_b">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[5][0].image} alt="" />
          <p>Animal (set B)</p>
        </div>
      </Link>
      <Link to="/clothes">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[6][0].image} alt="" />
          <p>Clothes</p>
        </div>
      </Link>
      <Link to="/emotion">
        <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
          <img src={cards[7][0].image} alt="" />
          <p>Emotion</p>
        </div>
      </Link>
    </div>
  );
};

export default MainPage;
