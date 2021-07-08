import cards from './cards';
import { CardLocal } from './types/card';
import { FieldStatisticPage, FilterStatisticPage } from './types/statistic';

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

  localStorage.setItem('game', JSON.stringify(statistic));
};

export const initStatisticPage = (): void => {
  const localStorageData = localStorage.getItem('game');
  if (!localStorageData) {
    initLocalStorageData();
  }
};

export const updateStatisticData = (words: string, action: string): void => {
  const localStorageData = localStorage.getItem('game');

  if (localStorageData) {
    const data: CardLocal[] = JSON.parse(localStorageData);

    data.forEach(item => {
      const dataStatistic = item;

      if (item.word === words) {
        switch (action) {
          case 'clicks':
            dataStatistic.clicks += 1;
            break;
          case 'correct':
            dataStatistic.correct += 1;
            break;
          case 'inCorrect':
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

        localStorage.setItem('game', JSON.stringify(data));
      }
    });
  }
};

export const sortTable = (field: FieldStatisticPage, filter: FilterStatisticPage): void => {
  const localStorageData = JSON.parse(localStorage.getItem('game') as string);

  if (filter === 'asc') {
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

  localStorage.setItem('game', JSON.stringify(localStorageData));
};
