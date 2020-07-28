import './Menu.css';
import React from 'react';

import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Bateraflix Logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo video
      </Button>
    </nav>
  );
};

export default Menu;
