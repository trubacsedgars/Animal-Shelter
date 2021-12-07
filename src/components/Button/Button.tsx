import './Button.scss';
import { FC } from 'react';

type ButtonProps = {
  name: string
  onClick: () => void;
  type: 'submit' | 'reset' | 'button';
}

const Button:FC<ButtonProps> = ({ name, onClick, type }) => (
  <div>
    <button
      type={type}
      className="button"
      onClick={onClick}
    >
      {name}
    </button>
  </div>
);

export default Button;
