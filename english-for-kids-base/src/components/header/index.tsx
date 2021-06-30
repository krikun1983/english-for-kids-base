import React from 'react';
import { useDispatch } from 'react-redux';
import Nav from './nav';
import ToggleSwitch from './nav/toggle-switch';
import useTypeSelector from '../../hooks/useTypeSelector';
import { ToggleActionTypes } from '../../types/toggle';
import './header.scss';

const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const { toggle } = useTypeSelector(state => state.toggle);

  const toggleChange = () => {
    if (toggle) {
      dispatch({ type: ToggleActionTypes.TOGGLE_TRAIN });
    } else {
      dispatch({ type: ToggleActionTypes.TOGGLE_PLAY });
    }
  };

  return (
    <header className="header">
      <Nav />
      <ToggleSwitch
        id="newsletter"
        checked={toggle}
        onChange={toggleChange}
        name="toggleSwitch"
        disabled={false}
      />
    </header>
  );
};

export default Header;
