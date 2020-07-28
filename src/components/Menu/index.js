import React from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img class="Logo" src={Logo} alt="Sergioflix logo"/>
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;