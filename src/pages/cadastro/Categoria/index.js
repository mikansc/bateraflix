import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';

const initialValues = { title: '', description: '', bgColor: '#455582' };

function CadastroCategoria() {
  const { values, handleChange, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  };

  useEffect(() => {
    categoriasRepository
      .fetchCategoriesWithVideos()
      .then((result) => {
        setCategorias(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.title}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          name="description"
          type="textarea"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          name="bgColor"
          type="color"
          value={values.bgColor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>
      {!categorias.length && <div>Loading... </div>}

      <ul>
        {categorias.map((cat, idx) => {
          return <li key={`${cat}-${idx}`}>{cat.title}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
