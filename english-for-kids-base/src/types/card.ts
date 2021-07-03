import { Dispatch, SetStateAction } from 'react';

export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export interface CardAction extends Card {
  audioSrcStartPlay: string[];
  arrayWordRandomState: string[];
  setArray: Dispatch<SetStateAction<string[]>>;
}
