import React from 'react';
import { useDispatch } from 'react-redux';
import Nav from './nav';
import ToggleSwitch from './nav/toggle-switch';
import useTypeSelector from '../../hooks/useTypeSelector';
import { ToggleActionTypes } from '../../types/toggle';
import './header.scss';

const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const { isToggle } = useTypeSelector(state => state.isToggle);

  const toggleChange = () => {
    if (isToggle) {
      dispatch({ type: ToggleActionTypes.TOGGLE_TRAIN });
    } else {
      dispatch({ type: ToggleActionTypes.TOGGLE_PLAY });
    }
  };

  return (
    <header className="header">
      <Nav />
      <ToggleSwitch id="newsletter" checked={isToggle} onChange={toggleChange} name="toggleSwitch" disabled={false} />
    </header>
  );
};

export default Header;
