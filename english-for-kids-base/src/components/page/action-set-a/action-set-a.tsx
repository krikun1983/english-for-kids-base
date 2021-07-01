import React from 'react';
import cards from '../../../cards';
import Pages from '../../../constants/pages';
import useTypeSelector from '../../../hooks/useTypeSelector';
import { Card } from '../../../types/card';
import CardPage from '../card-page';

const ActionSetA = (): JSX.Element => {
  const { isToggle } = useTypeSelector(state => state.isToggle);

  const arrayWord = cards[Pages.actionSetA].map(card => {
    const { audioSrc }: Card = card;
    return audioSrc;
  });

  const randomWords = (words: string[]): string[] => {
    return [...words].sort(() => Math.random() - 0.5);
  };

  const arrayWordRandom = randomWords(arrayWord);

  const cardAudioRandom = (): void => {
    const audio = new Audio(arrayWordRandom[arrayWordRandom.length - 1]);
    audio.play();
  };

  // const audioSrcEvent = () => {
  //   if (audioSrcPlay === audioSrc) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // };

  return (
    <div className="main-wrapper">
      <div className="main-wrapper__cards">
        {cards[0].map(card => {
          const { word, translation, image, audioSrc }: Card = card;
          return (
            <CardPage
              key={word}
              word={word}
              translation={translation}
              image={image}
              audioSrc={audioSrc}
              audioSrcPlay={arrayWordRandom[arrayWordRandom.length - 1]}
            />
          );
        })}
      </div>
      <div className={`main-wrapper__btn ${isToggle ? '' : 'hidden'}`}>
        <button type="button" onClick={cardAudioRandom}>
          START
        </button>
      </div>
    </div>
  );
};

export default ActionSetA;
