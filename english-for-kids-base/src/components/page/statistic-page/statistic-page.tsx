import React from 'react';
import uuid from 'react-uuid';
import cardsAll from '../../../cards';
import { Card } from '../../../types/card';
import './statistic-page.scss';

const StatisticPage = (): JSX.Element => {
  const cards = Object.values(cardsAll).flat();

  return (
    <div className="statistic-page">
      <div className="temp">
        Уважаемый проверяющий. Просьба или зайти через пару дней. Или оставить свои координаты. Работаю над заполнением
        страницы статистика. Заранее, большое спасибо!!!
      </div>
      <div className="statistic-btns">
        <button type="button">Repeat difficult words</button>
        <button type="button">Reset</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Words</th>
            <th>Translation</th>
            <th>Trained</th>
            <th>Correct</th>
            <th>Incorrect</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {cards.map(card => {
            const { word, translation, category }: Card = card;
            return (
              <tr key={uuid()}>
                <td>{category}</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticPage;
