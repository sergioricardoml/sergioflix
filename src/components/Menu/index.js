import React from 'react';
import Logo from '../../assets/logo.png';
import { LogoImage, MenuWrapper } from './styles.js';
import Button from '../Button'

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage class="Logo" src={Logo} alt="Sergioflix logo"/>
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;