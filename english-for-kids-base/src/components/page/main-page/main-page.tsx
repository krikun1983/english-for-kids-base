import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../../../cards';
import Pages from '../../../constants/pages';
import useTypeSelector from '../../../hooks/useTypeSelector';
import '../pages-all.scss';
import './main-page.scss';

const MainPage = (): JSX.Element => {
  const firstImagePageCategory = 0;
  const { isToggle } = useTypeSelector(state => state.isToggle);

  return (
    <div className="main-wrapper">
      <div className="main-wrapper__cards">
        <Link to="/action_a">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.actionSetA][firstImagePageCategory].image} alt="" />
            <p>Action (set A)</p>
          </div>
        </Link>
        <Link to="/action_b">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.actionSetB][firstImagePageCategory].image} alt="" />
            <p>Action (set B)</p>
          </div>
        </Link>
        <Link to="/action_c">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.actionSetC][firstImagePageCategory].image} alt="" />
            <p>Action (set C)</p>
          </div>
        </Link>
        <Link to="/adjective">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.adjective][firstImagePageCategory].image} alt="" />
            <p>Adjective</p>
          </div>
        </Link>
        <Link to="/animal_a">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.animalA][firstImagePageCategory].image} alt="" />
            <p>Animal (set A)</p>
          </div>
        </Link>
        <Link to="/animal_b">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.animalB][firstImagePageCategory].image} alt="" />
            <p>Animal (set B)</p>
          </div>
        </Link>
        <Link to="/clothes">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.clothes][firstImagePageCategory].image} alt="" />
            <p>Clothes</p>
          </div>
        </Link>
        <Link to="/emotion">
          <div className={`main-card ${isToggle ? 'main-card__toggle' : ''}`}>
            <img src={cards[Pages.emotion][firstImagePageCategory].image} alt="" />
            <p>Emotion</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
