import cards from './cards';
import { CardLocal } from './types/card';
import LocalStorageGame from './types/localStorage';
import {
  FieldStatisticPage,
  FieldStatisticPageLines,
  FilterStatisticPage,
  FilterStatisticPageSort,
} from './types/statistic';

export const initLocalStorageData = (): void => {
  const dataCards = [...Object.values(cards)].flat();
  const statistic = dataCards.map(card => {
    return {
      category: card.category,
      word: card.word,
      translation: card.translation,
      clicks: 0,
      correct: 0,
      inCorrect: 0,
      percent: 0,
    };
  });
  localStorage.setItem(LocalStorageGame.GAME, JSON.stringify(statistic));
};

export const initStatisticPage = (): void => {
  const localStorageData = localStorage.getItem(LocalStorageGame.GAME);
  if (!localStorageData) {
    initLocalStorageData();
  }
};

export const updateStatisticData = (words: string, action: string): void => {
  const localStorageData = localStorage.getItem(LocalStorageGame.GAME);
  if (localStorageData) {
    const data: CardLocal[] = JSON.parse(localStorageData);
    data.forEach(item => {
      const dataStatistic = item;
      if (item.word === words) {
        switch (action) {
          case FieldStatisticPageLines.CLICKS:
            dataStatistic.clicks += 1;
            break;
          case FieldStatisticPageLines.CORRECT:
            dataStatistic.correct += 1;
            break;
          case FieldStatisticPageLines.INCORRECT:
            dataStatistic.inCorrect += 1;
            break;
          default:
            break;
        }
        if (dataStatistic.inCorrect || dataStatistic.correct) {
          dataStatistic.percent = Number(
            ((dataStatistic.inCorrect * 100) / (dataStatistic.inCorrect + dataStatistic.correct)).toFixed(1),
          );
        }
        localStorage.setItem(LocalStorageGame.GAME, JSON.stringify(data));
      }
    });
  }
};

export const sortTable = (field: FieldStatisticPage, filter: FilterStatisticPage): void => {
  const localStorageData = JSON.parse(localStorage.getItem(LocalStorageGame.GAME) as string);

  if (filter === FilterStatisticPageSort.ASC) {
    localStorageData.sort((a: CardLocal, b: CardLocal) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
  } else {
    localStorageData.sort((a: CardLocal, b: CardLocal) => {
      if (a[field] < b[field]) {
        return 1;
      }
      if (a[field] > b[field]) {
        return -1;
      }
      return 0;
    });
  }
  localStorage.setItem(LocalStorageGame.GAME, JSON.stringify(localStorageData));
};
