import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import cards from '../../../cards';
import Pages from '../../../constants/pages';
import useTypeSelector from '../../../hooks/useTypeSelector';
import store from '../../../store';
import { Card } from '../../../types/card';
import { GameActionTypes } from '../../../types/game';
import CardPage from '../card-page';

const ActionSetA = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isToggle } = useTypeSelector(state => state.isToggle);
  const { isBtnStart } = useTypeSelector(state => state.isBtnStart);

  const { arrayStars } = useTypeSelector(state => state.arrayStars);

  const arrayAudioSrcWords = cards[Pages.actionSetA].map(card => {
    const { audioSrc }: Card = card;
    return audioSrc;
  });

  const randomWords = (words: string[]): string[] => {
    return [...words].sort(() => Math.random() - 0.5);
  };

  const arrayWordRandom = randomWords(arrayAudioSrcWords);
  const [arrayWordRandomState, setArrayWordRandom] = useState<string[]>(arrayWordRandom);

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
  return (
    <div className="main-wrapper">
      <div className="stars-result">
        {arrayStars.length > 0
          ? arrayStars.map((elem: string) => {
              return <img src={elem} key={uuid()} alt="star" />;
            })
          : ''}
      </div>
      <div className="main-wrapper__cards">
        {cards[Pages.actionSetA].map(card => {
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
          {`${isBtnStart ? 'AGAIN' : 'START'}`}
        </button>
      </div>
    </div>
  );
};

export default ActionSetA;
