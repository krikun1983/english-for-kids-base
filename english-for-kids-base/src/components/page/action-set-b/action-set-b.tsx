import React from 'react';
import cards from '../../../cards';
import Pages from '../../../constants/pages';
import { Card } from '../../../types/card';
import CardPage from '../card-page';

const ActionSetB = (): JSX.Element => {
  return (
    <div className="main-wrapper">
      {/* {cards[Pages.actionSetB].map(card => {
        const { word, translation, image, audioSrc }: Card = card;
        return <CardPage key={word} word={word} translation={translation} image={image} audioSrc={audioSrc} />;
      })} */}
    </div>
  );
};

export default ActionSetB;
