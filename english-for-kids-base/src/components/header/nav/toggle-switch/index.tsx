import React from 'react';
import './toggle-switch.scss';

interface InputCheckboxName {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: boolean) => void;
  disabled: boolean;
}

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  disabled,
}: InputCheckboxName): JSX.Element => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={event => onChange(event.target.checked)}
      />
      <label className="toggle-switch-label" htmlFor={id}>
        <span
          className={
            disabled
              ? 'toggle-switch-inner toggle-switch-disabled'
              : 'toggle-switch-inner'
          }
          data-yes="Train"
          data-no="Play"
        />
        <span
          className={
            disabled
              ? 'toggle-switch-switch toggle-switch-disabled'
              : 'toggle-switch-switch'
          }
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
