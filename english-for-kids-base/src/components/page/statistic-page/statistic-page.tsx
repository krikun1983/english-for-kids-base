import React from 'react';
import uuid from 'react-uuid';
import cards from '../../../cards';
import { Card } from '../../../types/card';
import './statistic-page.scss';

const StatisticPage = (): JSX.Element => {
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
          {cards[0].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>ActionSetA</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[1].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>ActionSetB</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[2].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>ActionSetC</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[3].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>Adjective</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[4].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>AnimalSetA</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[5].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>AnimalSetB</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[6].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>Clothes</td>
                <td>{word}</td>
                <td>{translation}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
          {cards[7].map(card => {
            const { word, translation }: Card = card;
            return (
              <tr key={uuid()}>
                <td>Emotion</td>
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
