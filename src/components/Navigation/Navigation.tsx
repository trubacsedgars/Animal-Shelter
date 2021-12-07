import './Navigation.scss';
import { FC } from 'react';

type HeaderNavProps = {
  name: string
  onClick: () => void;
}

const Navigation:FC<HeaderNavProps> = ({ name, onClick }) => (
  <button
    className="navigation__button"
    onClick={onClick}
  >
    {name}
  </button>
);

export default Navigation;
