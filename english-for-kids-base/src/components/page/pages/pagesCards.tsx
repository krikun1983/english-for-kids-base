import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { Redirect } from 'react-router-dom';
import useTypeSelector from '../../../hooks/useTypeSelector';
import store from '../../../store';
import { Card, SrcPages } from '../../../types/card';
import { GameActionTypes } from '../../../types/game';
import CardPage from '../card-page';
import { ResultGameActionTypes } from '../../../types/result-game';
import { StarsActionTypes } from '../../../types/stars';
import { ToggleActionTypes } from '../../../types/toggle';
import { CountErrorActionTypes } from '../../../types/count-error';
import cards from '../../../constants/cards';
import { randomWords } from '../../../utils';
import BtnStartGame from '../../../constants/btn-start-game';

const PagesCards = ({ src }: SrcPages): JSX.Element => {
  const dispatch = useDispatch();
  const { isToggle } = useTypeSelector(state => state.isToggle);
  const { isBtnStart } = useTypeSelector(state => state.isBtnStart);
  const { isResultGame } = useTypeSelector(state => state.isResultGame);
  const { isMain } = useTypeSelector(state => state.isMain);
  const { arrayStars } = useTypeSelector(state => state.arrayStars);
  const { count } = useTypeSelector(state => state.count);

  const arrayAudioSrcWords = cards[src].map((card: Card) => {
    const { audioSrc }: Card = card;
    return audioSrc;
  });

  const arrayWordRandom = randomWords(arrayAudioSrcWords);
  const [arrayWordRandomState, setArrayWordRandom] = useState<string[]>(arrayWordRandom);
  useEffect(() => {
    setArrayWordRandom(arrayWordRandom);
  }, [isToggle]);
  useEffect(() => {
    if (isMain) {
      dispatch({ type: GameActionTypes.GAME_STOP });
      dispatch({ type: StarsActionTypes.REMOVE_STARS });
      dispatch({ type: ResultGameActionTypes.RESULT_GAME_ERROR });
      dispatch({ type: ToggleActionTypes.TOGGLE_TRAIN });
      dispatch({ type: CountErrorActionTypes.REMOVE_COUNT });
      dispatch({ type: ResultGameActionTypes.RESULT_MAIN_DEFAULT });
    }
  }, [isMain]);

  const startGame = () => {
    if (!isBtnStart) {
      dispatch({ type: GameActionTypes.GAME_START });
    }
  };

  const start = () => {
    startGame();
    if (store.getState().isBtnStart.isBtnStart) {
      const audio = new Audio(arrayWordRandomState[arrayWordRandomState.length - 1]);
      audio.play();
    }
  };

  if (isMain) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main-wrapper">
      <div className={`result-game ${isResultGame ? '' : 'hidden'}`} role="presentation">
        <img src={count > 0 ? 'failure.png' : 'success.png'} alt={count > 0 ? 'failure' : 'success'} />
        <p>{count > 0 ? `error: ${count}` : 'Well done keep it up!'}</p>
      </div>
      <div className="stars-result">
        {arrayStars.length > 0
          ? arrayStars.map((elem: string) => {
              return <img src={elem} key={uuid()} alt="star" />;
            })
          : ''}
      </div>
      <div className="categories_header">{src}</div>
      <div className="main-wrapper__cards">
        {cards[src].map((card: Card): JSX.Element => {
          const { word, translation, image, audioSrc, category }: Card = card;
          return (
            <CardPage
              key={word}
              word={word}
              translation={translation}
              image={image}
              audioSrc={audioSrc}
              category={category}
              audioSrcStartPlay={arrayWordRandomState}
              arrayWordRandomState={arrayWordRandomState}
              setArray={setArrayWordRandom}
            />
          );
        })}
      </div>
      <div className={`main-wrapper__btn ${isToggle ? '' : 'hidden'}`}>
        <button className="btn" type="button" onClick={start}>
          {`${isBtnStart ? BtnStartGame.REPEAT : BtnStartGame.START_GAME}`}
        </button>
      </div>
    </div>
  );
};

export default PagesCards;
