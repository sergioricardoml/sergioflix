import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle="Oi, eu sou o Sérgio. Prazer!"
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Aqui você pode conhecer um pouco dos meus gostos pessoais! Um pouco de músicas, filmes, séries e jogos! Projeto realizado durante a semana de Imersão React na Alura."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default App;
