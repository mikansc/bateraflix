[Clique aqui para acessar a demonstração](https://bateraflix.vercel.app)

### Instalar dependencias e rodar aplicação

```javascript
npm install
npm start
```

### Tecnologias utilizadas

<table>
<tr>
<td>HTML</td>
<td>CSS</td>
<td>Styled-Components</td>
<td>React JS</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

### Todo

- [ ] Implementar API do Youtube
- [ ] Acrescentar categorias
- [ ] Integrar com sistema de banco de dados

<hr>

Projeto idealizado por <img src="./public/alura-logo.svg" style="width: 50px; margin: 0 5px"> e estilizado por **Michael** **Nascimento**.

---

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/tgmarinho/README-ecoleta?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tgmarinho/README-ecoleta">

  <a href="https://www.twitter.com/tgmarinho/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftgmarinho%2FREADME-ecoleta">
  </a>
  
  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tgmarinho/README-ecoleta">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/README-ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/tgmarinho/README-ecoleta?style=social">
  </a>

  <a href="https://rocketseat.com.br">
    <img alt="Feito pela Rocketseat" src="https://img.shields.io/badge/feito%20por-Rocketseat-%237519C1">
  </a>
  
  <a href="https://blog.rocketseat.com.br/">
    <img alt="Stargazers" src="https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=flat&logo=ghost">
    </a>
  
 
</p>
<h1 align="center">
    <img alt="BateraFlix" title="#Bateraflix" src="./src/assets/img/logo.png" />
</h1>
<p align="center">
Bateraflix é um projeto da #ImersãoReact Alura
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

---

<p style="margin-top: 20px">

## ☕ Sobre o projeto

Bateraflix - é um projeto baseado no Netflix com conteúdo voltado para músicos bateristas.

O projeto foi desenvolvido durante a **Semana React da** [<img src="./public/alura-logo.svg" style="width: 50px; margin: 0 5px">](http://www.alura.com.br) e personalizado por **Michael** **Nascimento**.

A ideia do projeto é oferecer uma plataforma de acesso à conteúdo de estúdo e entretenimento totalmente voltada para o instrumento, dentro de uma interface amigável e já conhecida.

---

<p style="margin-top: 20px">

## Funcionalidades

- <p style="display: inline; margin-right: 10px;"></p>O usuário pode cadastrar um vídeo do YouTube:

  - <p style="display: inline; margin-right: 10px;">👉</p> Acessar "Novo vídeo"
  - <p style="display: inline; margin-right: 10px;">👉</p> Inserir título do vídeo, link e categoria
  - <p style="display: inline; margin-right: 10px;">👉</p> A categoria é sugerida pelo próprio aplicativo
  - <p style="display: inline; margin-right: 10px;">👉</p> Clicar em cadastrar

- <p style="display: inline; margin-right: 10px;"></p>O usuário pode cadastrar uma categoria de vídeo

  - <p style="display: inline; margin-right: 10px;">👉</p> Acessar "Novo vídeo"
  - <p style="display: inline; margin-right: 10px;">👉</p> Acessar "Cadastrar categoria"
  - <p style="display: inline; margin-right: 10px;">👉</p> Inserir o nome da categoria, descrição e cor da etiqueta

---

<p style="margin-top: 20px">

## Layout

O desenho do layout foi pensado mobile-first.

<h2 align="center"> Mobile 📱 </h2>
<p align="center" style="display: block;">
  <img style="display: block; width: 100%; max-width: 300px;" alt="NextLevelWeek" title="#NextLevelWeek" src="./github/bateraflix-mobile.gif">
</p>
<p style="margin-top: 20px">
<h2 align="center"> Web 🖥 </h2>
<p style="margin-top: 20px">
<p align="center" style="display: block; width: 100%">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./github/bateraflix-home.gif">
</p>

---

<p style="margin-top: 20px">

## Como executar o projeto

Este projeto é composto por um servidor simples (JSON Server) e React no front-end.

####

<p style="margin-top: 20px">

```bash

# Clonar o repositório
$ git clone https://github.com/mikansc/bateraflix.git

# Acessar a pasta do projeto
$ cd bateraflix

# Instalar as dependências
$ npm install

# Executar a aplicação em modo de desenvolvimento
$ npm run dev

# O aplicativo inciará na porta:3000 - acesse http://localhost:3000
# O JSON Server executa automaticamente com a aplicação.

```

---

<!-- <p style="margin-top: 20px">

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-end**

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**
- **[Leaflet](https://react-leaflet.js.org/en/)**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

#### **Server**

- **[JSON Server](https://github.com/typicode/json-server)**

> Veja o arquivo [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json) -->

---

## ✋ Autor

<a href="http://www.mkwebdev.com.br/">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/35317401?s=460&u=53f0a76fbf41bafa9f776c73d87ba73aefe0ff62&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Michael Nascimento</b></sub></a> <a href="http://www.mkwebdev.com.br/" title="Rocketseat"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Michael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/michaelnsc/)
[![Microsoft Badge](https://img.shields.io/badge/-michael.nsc@outlook.com-blue?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:michael.nsc@outlook.com)](mailto:michael.nsc@outlook.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---

Layout do README baseado no layout feito com ❤️ por Thiago Marinho 👋🏽 [Entre em contato!](https://www.linkedin.com/in/tgmarinho/)
