import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { LogoImage, MenuWrapper } from './styles.js';
import Button from '../Button';

function Menu({ displayButton }) {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="Sergioflix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" displayButton={displayButton}>
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
