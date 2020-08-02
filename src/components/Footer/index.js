import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/sergioricardoml">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Logo Github" />
      </a>
      <a href="https://www.linkedin.com/in/sergioricardolara/">
        <img src="https://oficinadainteligencia.com.br/wp-content/uploads/2019/04/simple-icon-linkedin-white.png" alt="Logo Linkedin" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/sergioricardoml">
          sergioricardoml
        </a>
        {' '}
        durante a #ImersãoReact da
        {' '}
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
