import React, { useState } from 'react';
import Nav from './nav';
import ToggleSwitch from './nav/toggle-switch';
import './header.scss';

const Header = (): JSX.Element => {
  const [newsletter, setNewsletter] = useState<boolean>(false);

  const onNewsletterChange = (
    checked: boolean | ((prevState: boolean) => boolean),
  ) => {
    setNewsletter(checked);
  };

  return (
    <header className="header">
      <Nav />
      <ToggleSwitch
        id="newsletter"
        checked={newsletter}
        onChange={onNewsletterChange}
        name="toggleSwitch"
        disabled={false}
      />
    </header>
  );
};

export default Header;
