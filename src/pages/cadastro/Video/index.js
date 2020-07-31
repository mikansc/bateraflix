import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

const CadastroVideo = () => {
  const history = useHistory();
  const { clearForm, values, handleChange } = useForm({
    titulo: 'video padrao',
    url: 'url.com.br',
    categoria: 'Stick Tricks',
  });
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: 6,
            })
            .then(() => {
              console.log('Video cadastrado.');
              history.push('/');
            })
            .catch((err) => {
              console.log(err.message);
            });
        }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <Link to="/">Ir para home</Link>
      <Link to="/cadastro/categoria/">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
