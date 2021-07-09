import React, { useState } from 'react';
import cards from '../../../cards';
import { Card, CardLocal } from '../../../types/card';
import CardPage from '../card-page';

const ErrorWordsPage = (): JSX.Element => {
  const localStorageData = JSON.parse(localStorage.getItem('game') as string);
  const dataCards = [...Object.values(cards)].flat();
  const cardsErrorsArray: string[] = [];

  const arrayAudioSrcWords = dataCards.map((card: Card) => {
    const { audioSrc }: Card = card;
    return audioSrc;
  });

  const randomWords = (words: string[]): string[] => {
    return [...words].sort(() => Math.random() - 0.5);
  };

  const arrayWordRandom = randomWords(arrayAudioSrcWords);
  const [arrayWordRandomState, setArrayWordRandom] = useState<string[]>(arrayWordRandom);

  return (
    <div className="main-wrapper__cards">
      {localStorageData.forEach((localCard: CardLocal) => {
        if (localCard.percent !== 0) {
          cardsErrorsArray.push(localCard.word);
        }
      })}
      {cardsErrorsArray.map(elem => {
        return dataCards.map((card: Card) => {
          if (card.word === elem) {
            const { word, translation, image, audioSrc, category }: Card = card;
            return (
              <>
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
              </>
            );
          }
          return null;
        });
      })}
    </div>
  );
};

export default ErrorWordsPage;
