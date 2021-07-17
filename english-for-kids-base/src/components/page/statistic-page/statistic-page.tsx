import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { CardLocal } from '../../../types/card';
import { FieldStatisticPage } from '../../../types/statistic';
import { initLocalStorageData, sortTable } from '../../../utils';
import './statistic-page.scss';

const StatisticPage = (): JSX.Element => {
  const [localStorageDate, setLocalStorageDate] = useState(JSON.parse(localStorage.getItem('game') as string));
  const [updateTable, setUpdateTable] = useState(false);

  useEffect(() => {
    const localStorageData = localStorage.getItem('game');
    if (localStorageData) {
      setLocalStorageDate(JSON.parse(localStorageData));
      setUpdateTable(false);
    }
  }, [updateTable]);

  const sortedFieldStatisticPage = (element: HTMLElement, category: FieldStatisticPage): void => {
    if (element.matches('.asc')) {
      sortTable(category, 'desc');
      setUpdateTable(!updateTable);
      element.classList.remove('asc');
      element.classList.add('desc');
      return;
    }
    if (element.matches('.desc')) {
      sortTable(category, 'asc');
      setUpdateTable(!updateTable);
      element.classList.remove('desc');
      element.classList.add('asc');
      return;
    }
    sortTable(category, 'desc');
    setUpdateTable(!updateTable);
    element.classList.add('desc');
  };

  return (
    <div className="statistic-page">
      <div className="statistic-btns">
        <Link className="btn btn_margin" to="/errors_words">
          Repeat difficult words
        </Link>
        <button
          className="btn"
          type="button"
          onClick={(): void => {
            initLocalStorageData();
            setUpdateTable(!updateTable);
          }}
        >
          Reset
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'category');
              }}
            >
              Categories
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'word');
              }}
            >
              Words
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'translation');
              }}
            >
              Translation
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'clicks');
              }}
            >
              Trained
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'correct');
              }}
            >
              Correct
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'inCorrect');
              }}
            >
              Incorrect
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, 'percent');
              }}
            >
              %
            </th>
          </tr>
        </thead>

        <tbody>
          {localStorageDate.map((card: CardLocal) => {
            return (
              <tr key={uuid()}>
                <td>{card.category}</td>
                <td>{card.word}</td>
                <td>{card.translation}</td>
                <td>{card.clicks}</td>
                <td>{card.correct}</td>
                <td>{card.inCorrect}</td>
                <td>{card.percent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticPage;
