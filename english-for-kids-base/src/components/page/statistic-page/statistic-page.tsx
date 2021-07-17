import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { CardLocal } from '../../../types/card';
import LocalStorageGame from '../../../types/localStorage';
import { FieldStatisticPage, FieldStatisticPageLines, FilterStatisticPageSort } from '../../../types/statistic';
import { initLocalStorageData, sortTable } from '../../../utils';
import './statistic-page.scss';

const StatisticPage = (): JSX.Element => {
  const [localStorageDate, setLocalStorageDate] = useState(
    JSON.parse(localStorage.getItem(LocalStorageGame.GAME) as string),
  );
  const [updateTable, setUpdateTable] = useState(false);

  useEffect(() => {
    const localStorageData = localStorage.getItem(LocalStorageGame.GAME);
    if (localStorageData) {
      setLocalStorageDate(JSON.parse(localStorageData));
      setUpdateTable(false);
    }
  }, [updateTable]);

  const sortedFieldStatisticPage = (element: HTMLElement, category: FieldStatisticPage): void => {
    if (element.matches('.asc')) {
      sortTable(category, FilterStatisticPageSort.DESC);
      setUpdateTable(!updateTable);
      element.classList.remove(FilterStatisticPageSort.ASC);
      element.classList.add(FilterStatisticPageSort.DESC);
      return;
    }
    if (element.matches('.desc')) {
      sortTable(category, FilterStatisticPageSort.ASC);
      setUpdateTable(!updateTable);
      element.classList.remove(FilterStatisticPageSort.DESC);
      element.classList.add(FilterStatisticPageSort.ASC);
      return;
    }
    sortTable(category, FilterStatisticPageSort.DESC);
    setUpdateTable(!updateTable);
    element.classList.add(FilterStatisticPageSort.DESC);
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
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.CATEGORY);
              }}
            >
              Categories
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.WORD);
              }}
            >
              Words
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.TRANSLATION);
              }}
            >
              Translation
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.CLICKS);
              }}
            >
              Trained
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.CORRECT);
              }}
            >
              Correct
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.INCORRECT);
              }}
            >
              Incorrect
            </th>
            <th
              onClick={(event): void => {
                const targetClick = event.target as HTMLElement;
                sortedFieldStatisticPage(targetClick, FieldStatisticPageLines.PERCENT);
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
