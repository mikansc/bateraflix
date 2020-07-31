import config from '../config';
import { object } from 'prop-types';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(object) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  }).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }

    throw new Error('Não foi possível cadastrar dados');
  });
}

export default {
  create,
};
