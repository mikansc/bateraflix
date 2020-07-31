import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState({
    name: '',
    description: '',
    bgColor: '#455582',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues({ name: '', description: '', bgColor: '' });
  };

  const setValue = (key, value) => {
    setValues({
      ...values,
      // set the key valye to be the key string parameter using [key]
      [key]: value,
    });
  };

  const handleChange = (event) => {
    setValue(event.target.getAttribute('name'), event.target.value);
  };

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP).then(async (res) => {
      const data = await res.json();
      setCategorias([...data]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          name="name"
          type="text"
          value={values.name}
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
          return <li key={`${cat}-${idx}`}>{cat.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
