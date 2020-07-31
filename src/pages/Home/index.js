import React from 'react';

import { categorias } from '../../data/dados_iniciais.json';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';

function Home() {
  const renderedCarousel = categorias.map((categoria, idx) => {
    return <Carousel key={idx} category={categoria} />;
  });
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        videoDescription="Alguma descrição que por enquanto estou colocando hard-coded."
        url={categorias[0].videos[0].url}
      />
      {renderedCarousel}
      <Footer />
    </div>
  );
}

export default Home;
