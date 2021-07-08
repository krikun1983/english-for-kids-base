import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypeSelector from '../../hooks/useTypeSelector';
import { CardAction } from '../../types/card';
import { StarsActionTypes } from '../../types/stars';
import successImages from '../../../public/star-win.svg';
import errorImages from '../../../public/star.svg';
import { GameActionTypes } from '../../types/game';
import { ResultGameActionTypes } from '../../types/result-game';
import { CountErrorActionTypes } from '../../types/count-error';
import './card-page.scss';

const CardPage = ({
  word,
  translation,
  image,
  audioSrc,
  audioSrcStartPlay,
  arrayWordRandomState,
  setArray,
}: CardAction): JSX.Element => {
  const nextWordAudio = 1500; // ms
  const redirectMainPage = 5000; // ms
  const dispatch = useDispatch();
  const { isToggle } = useTypeSelector(state => state.isToggle);
  const { isBtnStart } = useTypeSelector(state => state.isBtnStart);
  const { arrayStars } = useTypeSelector(state => state.arrayStars);
  const { count } = useTypeSelector(state => state.count);
  const MAX_STARS = 15;

  const addCount = () => {
    dispatch({ type: CountErrorActionTypes.ADD_COUNT, payload: 1 });
  };

  const addArrayStars = (strings: string) => {
    if (arrayStars.length > MAX_STARS) {
      dispatch({ type: StarsActionTypes.ADD_STARS_MAX, payload: [strings] });
    } else {
      dispatch({ type: StarsActionTypes.ADD_STARS, payload: [strings] });
    }
  };

  const [isCardFlipShow, setCardFlipShow] = useState<boolean>(false);
  const [isCardSuccessHidden, setCardSuccessHidden] = useState<boolean>(false);
  useEffect(() => {
    setCardSuccessHidden(false);
  }, [isToggle]);

  const cardAudio = (): void => {
    if (!isToggle) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  };

  const wordCheck = () => {
    if (arrayWordRandomState.length === 1) {
      dispatch({ type: GameActionTypes.GAME_STOP });
      dispatch({ type: ResultGameActionTypes.RESULT_GAME_SUCCESS });

      setTimeout(() => {
        dispatch({ type: ResultGameActionTypes.RESULT_MAIN });
      }, redirectMainPage);
      if (count > 0) {
        const audio = new Audio('failure.mp3');
        audio.play();
      } else {
        const audio = new Audio('success.mp3');
        audio.play();
      }
    }
    if (audioSrcStartPlay[audioSrcStartPlay.length - 1] === audioSrc) {
      arrayWordRandomState.pop();
      setArray(arrayWordRandomState);
      const audio = new Audio('correct.mp3');
      audio.play();
      setTimeout(() => {
        const audioWord = new Audio(audioSrcStartPlay[audioSrcStartPlay.length - 1]);
        audioWord.play();
      }, nextWordAudio);

      if (isBtnStart) {
        setCardSuccessHidden(!isCardSuccessHidden);
        addArrayStars(successImages);
      }
    } else if (isBtnStart) {
      addCount();
      const audio = new Audio('errorPlay.mp3');
      audio.play();
      addArrayStars(errorImages);
    }
  };

  const combineFn = () => {
    if (!isCardSuccessHidden) {
      cardAudio();
      if (isBtnStart) {
        wordCheck();
      }
    }
  };

  return (
    <div
      className={`flip-container ${isCardFlipShow ? 'flipper' : ''} ${
        isCardSuccessHidden && isToggle ? 'card-success-close' : ''
      }`}
    >
      <div className="flipper" onClick={combineFn} role="presentation">
        <div className="front">
          <div className={`card ${isToggle ? 'card-toggle' : ''}`}>
            <div className={`card-images ${isToggle ? 'card-images-toggle' : ''}`}>
              <img
                className={`card-images__item ${isToggle ? 'card-images__item-toggle' : ''}`}
                src={image}
                alt={word}
              />
            </div>
            <div className={`card-text ${isToggle ? 'card-text-toggle' : ''}`}>
              <div className="card-text__word">{word}</div>
              <button className="card-text__button" type="button" onClick={() => setCardFlipShow(!isCardFlipShow)}>
                <svg id="rotate" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0, 0, 400,400">
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

        <div className="back" onMouseLeave={() => setCardFlipShow(!isCardFlipShow)}>
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
