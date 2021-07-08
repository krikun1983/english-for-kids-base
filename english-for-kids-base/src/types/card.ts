import { Dispatch, SetStateAction } from 'react';
import Pages from '../constants/pages';

export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  category: string;
}

export interface CardLocal extends Card {
  clicks: number;
  correct: number;
  inCorrect: number;
  percent: number;
}

export interface CardAction extends Card {
  audioSrcStartPlay: string[];
  arrayWordRandomState: string[];
  setArray: Dispatch<SetStateAction<string[]>>;
}

export interface SrcPages {
  src: Pages;
}
