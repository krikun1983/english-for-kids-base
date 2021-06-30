import React, { useState } from 'react';
import useTypeSelector from '../../hooks/useTypeSelector';
import { Card } from '../../types/cards';
import './card-page.scss';

const CardPage = ({
  word,
  translation,
  image,
  audioSrc,
}: Card): JSX.Element => {
  const { toggle } = useTypeSelector(state => state.toggle);

  const [isCardFlipShow, setCardFlipShow] = useState<boolean>(false);

  const cardAudio = (): void => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className={`flip-container ${isCardFlipShow ? 'flipper' : ''}`}>
      <div className="flipper" onClick={cardAudio} role="presentation">
        <div className="front">
          <div className="card">
            <div className="card-images">
              <img className="card-images__item" src={image} alt={word} />
            </div>
            <div className={`card-text ${toggle ? '' : 'red'}`}>
              <div className="card-text__word">{word}</div>
              <button
                className="card-text__button"
                type="button"
                onClick={() => setCardFlipShow(!isCardFlipShow)}
              >
                <svg
                  id="rotate"
                  xmlns="http://www.w3.org/2000/svg"
                  width="400"
                  height="400"
                  viewBox="0, 0, 400,400"
                >
                  <g id="svgg">
                    <path
                      id="path0"
                      d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978
              276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117
              L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667
              256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080
              169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024
              211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841
              141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718
              213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624
              269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872
              115.470,236.377 97.063,149.333 106.849 "
                      stroke="none"
                      fill="#000000"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="back"
          onMouseLeave={() => setCardFlipShow(!isCardFlipShow)}
        >
          <div className="card">
            <div className="card-images">
              <img className="card-images__item" src={image} alt={word} />
            </div>
            <div className="card-text">
              <div className="card-text__word">{translation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
