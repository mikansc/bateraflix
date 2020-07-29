import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState({
    name: 'Teste',
    description: 'Descrição',
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

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField value={values.name} onChange={handleChange} />
        <div>
          <label>
            Descrição:
            <textarea
              name="description"
              type="text"
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              name="bgColor"
              type="color"
              value={values.bgColor}
              onChange={handleChange}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

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
