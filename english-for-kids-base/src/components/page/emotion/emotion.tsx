import React from 'react';
import cards from '../../../cards';
import { Card } from '../../../types/card';
import CardPage from '../card-page';

const Emotion = (): JSX.Element => {
  return (
    <div className="main-wrapper">
      {cards[7].map(card => {
        const { word, translation, image, audioSrc }: Card = card;
        return (
          <CardPage
            key={word}
            word={word}
            translation={translation}
            image={image}
            audioSrc={audioSrc}
          />
        );
      })}
    </div>
  );
};

export default Emotion;
