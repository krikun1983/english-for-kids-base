export type FieldStatisticPage = 'category' | 'word' | 'translation' | 'clicks' | 'correct' | 'inCorrect' | 'percent';
export type FilterStatisticPage = 'asc' | 'desc';

export enum FieldStatisticPageLines {
  CATEGORY = 'category',
  WORD = 'word',
  TRANSLATION = 'translation',
  CLICKS = 'clicks',
  CORRECT = 'correct',
  INCORRECT = 'inCorrect',
  PERCENT = 'percent',
}

export enum FilterStatisticPageSort {
  ASC = 'asc',
  DESC = 'desc',
}
