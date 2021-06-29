import React from 'react';
import cards from '../../../cards';
import CardPage from '../card-page';
import './action-set-a.scss';

export interface Cards {
  id: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

const ActionSetA = (): JSX.Element => {
  return (
    <div className="main-wrapper">
      {cards[0].map(card => {
        const { id, word, translation, image, audioSrc }: Cards = card;
        return (
          <CardPage
            key={id}
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

export default ActionSetA;
