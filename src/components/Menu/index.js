import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Bateraflix Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo video
      </Button>
    </nav>
  );
};

export default Menu;
