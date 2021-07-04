import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';
import cards from '../../../cards';
import useTypeSelector from '../../../hooks/useTypeSelector';
import store from '../../../store';
import { Card, SrcPages } from '../../../types/card';
import { GameActionTypes } from '../../../types/game';
import CardPage from '../card-page';
import { ResultGameActionTypes } from '../../../types/result-game';
import { StarsActionTypes } from '../../../types/stars';
import { ToggleActionTypes } from '../../../types/toggle';
import { CountErrorActionTypes } from '../../../types/count-error';

const PagesCards = ({ src }: SrcPages): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isToggle } = useTypeSelector(state => state.isToggle);
  const { isBtnStart } = useTypeSelector(state => state.isBtnStart);
  const { isResultGame } = useTypeSelector(state => state.isResultGame);
  const { arrayStars } = useTypeSelector(state => state.arrayStars);
  const { count } = useTypeSelector(state => state.count);

  const arrayAudioSrcWords = cards[src].map(card => {
    const { audioSrc }: Card = card;
    return audioSrc;
  });

  const randomWords = (words: string[]): string[] => {
    return [...words].sort(() => Math.random() - 0.5);
  };

  const arrayWordRandom = randomWords(arrayAudioSrcWords);
  const [arrayWordRandomState, setArrayWordRandom] = useState<string[]>(arrayWordRandom);
  useEffect(() => {
    setArrayWordRandom(arrayWordRandom);
  }, [isToggle]);

  const startGame = () => {
    if (!isBtnStart) {
      dispatch({ type: GameActionTypes.GAME_START });
    }
  };

  const stopGame = () => {
    if (arrayWordRandomState.length === 0) {
      history.push('/');
      dispatch({ type: GameActionTypes.GAME_STOP });
      dispatch({ type: StarsActionTypes.REMOVE_STARS });
      dispatch({ type: ResultGameActionTypes.RESULT_GAME_ERROR });
      dispatch({ type: ToggleActionTypes.TOGGLE_TRAIN });
      dispatch({ type: CountErrorActionTypes.REMOVE_COUNT });
    }
  };

  const start = () => {
    startGame();
    if (store.getState().isBtnStart.isBtnStart) {
      const audio = new Audio(arrayWordRandomState[arrayWordRandomState.length - 1]);
      audio.play();
    }
  };
  return (
    <div className="main-wrapper">
      <div className={`result-game ${isResultGame ? '' : 'hidden'}`} onClick={stopGame} role="presentation">
        {count > 0 ? <img src="failure.png" alt="success" /> : <img src="success.png" alt="success" />}
        {count > 0 ? <p>error: {count}</p> : <p>Well done keep it up!</p>}
      </div>
      <div className="stars-result">
        {arrayStars.length > 0
          ? arrayStars.map((elem: string) => {
              return <img src={elem} key={uuid()} alt="star" />;
            })
          : ''}
      </div>
      <div className="main-wrapper__cards">
        {cards[src].map(card => {
          const { word, translation, image, audioSrc }: Card = card;
          return (
            <CardPage
              key={word}
              word={word}
              translation={translation}
              image={image}
              audioSrc={audioSrc}
              audioSrcStartPlay={arrayWordRandomState}
              arrayWordRandomState={arrayWordRandomState}
              setArray={setArrayWordRandom}
            />
          );
        })}
      </div>
      <div className={`main-wrapper__btn ${isToggle ? '' : 'hidden'}`}>
        <button type="button" onClick={start}>
          {`${isBtnStart ? 'REPEAT' : 'START GAME'}`}
        </button>
      </div>
    </div>
  );
};

export default PagesCards;
