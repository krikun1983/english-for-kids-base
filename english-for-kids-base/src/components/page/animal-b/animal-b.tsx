import React from 'react';
import { Card } from '../../../app.types';
import cards from '../../../cards';
import CardPage from '../card-page';

const AnimalB = (): JSX.Element => {
  return (
    <div className="main-wrapper">
      {cards[5].map(card => {
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

export default AnimalB;
