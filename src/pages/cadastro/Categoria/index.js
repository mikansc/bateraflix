import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import categoriasRepository from "../../../repositories/categorias";

const CategoryTitle = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin: 5px;
  display: inline-block;
  padding: 10px;
  background: ${(props) => props.bgColor || "red"};
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

const initialValues = { title: "", description: "", bgColor: "#455582" };

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
      <h1>Cadastro de Categoria:</h1>

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
        <Button as={Link} to="/" bgColor="var(--mediumGray)">
          Cancelar
        </Button>
      </form>
      {!categorias.length && <div>Loading... </div>}
      <div
        style={{
          width: "100%",
          border: "1px solid var(--white)",
          margin: "16px 0 32px",
          padding: "16px",
          borderRadius: "10px",
        }}
      >
        <h2>Categorias cadastradas</h2>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: "0",
            padding: "0",
          }}
        >
          {categorias.map((cat, idx) => {
            console.log(cat);
            return (
              <li key={`${cat}-${idx}`}>
                <CategoryTitle bgColor={cat.bgColor}>{cat.title}</CategoryTitle>
              </li>
            );
          })}
        </ul>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
