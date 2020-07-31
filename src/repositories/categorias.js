import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function fetchCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  fetchCategoriesWithVideos,
};
