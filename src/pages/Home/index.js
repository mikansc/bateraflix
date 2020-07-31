import React, { useEffect, useState } from 'react';

// import { categorias } from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .fetchCategoriesWithVideos()
      .then((result) => {
        console.log(result);
        setDadosIniciais(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div> Loading...</div>}
      {dadosIniciais.map((categoria, idx) => {
        if (idx === 0) {
          return (
            <>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                videoDescription="Alguma descrição que por enquanto estou colocando hard-coded."
                url={dadosIniciais[0].videos[0].url}
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </>
          );
        }
        return <Carousel key={idx} category={categoria} />;
      })
    }
    </PageDefault>
  )
}

export default Home;
