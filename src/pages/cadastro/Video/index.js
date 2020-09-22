import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { clearForm, values, handleChange } = useForm({});

  useEffect(() => {
    categoriasRepository
      .fetchCategories()
      .then((data) => {
        setCategorias(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.title === values.categoria;
          });

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log("Video cadastrado.");
              history.push("/");
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
          suggestions={categoryTitles}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
        <Button as={Link} to="/cadastro/categoria/">
          Cadastrar Categoria
        </Button>
        <Button as={Link} to="/" bgColor="var(--mediumGray)">
          Cancelar
        </Button>
      </form>
    </PageDefault>
  );
};

export default CadastroVideo;
