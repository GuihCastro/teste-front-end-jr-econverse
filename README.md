# Teste Front-End Jr - Econverse

## Descrição

Este projeto é uma landing page desenvolvida como parte do processo seletivo para a vaga de Estágio como Desenvolvedor Front-End na Econverse. A página foi criada utilizando React, TypeScript e Sass, seguindo um layout específico fornecido no Figma e consumindo dados de produtos a partir de um arquivo JSON como api.

## Demonstrações da aplicação rodando localmente
- Página:
![página](./public/assets/page.gif)

- Modal:
![modal](./public/assets/modal.gif)

## Pré-requisitos

- Node.js v14 ou superior
- npm ou yarn

## Como executar o projeto

### Clonar o repositório

```bash
git clone https://github.com/GuihCastro/teste-front-end-jr-econverse.git
cd teste-front-end-jr-econverse
```

### Instalar dependências

```bash
npm install
```
ou
```bash
yarn install
```

### Rodar o projeto localmente

```bash
npm run dev
```
ou
```bash
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Construir o projeto para produção

```bash
npm run build
```
ou
```bash
yarn build
```

Os arquivos de saída serão gerados na pasta `dist`.

## Estrutura do Projeto

- `public/` - Contém arquivos estáticos, como imagens e o arquivo JSON (api) de produtos.
- `src/` - Contém o código-fonte da aplicação.
  - `components/` - Contém os componentes reutilizáveis da aplicação.
  - `styles/` - Contém arquivos de estilo Sass.
  - `App.tsx` - Componente principal da aplicação.
  - `index.tsx` - Ponto de entrada da aplicação.

## Funcionalidades

- Renderização de uma vitrine de produtos.
- Modal de detalhes do produto ao clicar em um item da vitrine.
- Troca de banners conforme a categoria ativa no menu.

## Boas práticas aplicadas

### Boas práticas de React

- **Componentização:** Interface dividida em componentes pequenos e reutilizáveis.
- **Estado e Props:** Utilização de `useState` e `useEffect` de forma eficiente e passagem de dados através de props.
- **Chaves únicas:** Uso de chaves únicas (`key`) para cada item ao renderizar listas.
- **Proptypes:** Utilização do TypeScript para tipagem de props e estados, melhorando a robustez do código.
- **Estilos em módulos:** Uso de SCSS Modules para evitar conflitos de nomes de classes.

### Boas práticas de Sass

- **Variáveis:** Utilização de variáveis para cores.
- **Aninhamento:** Aninhamento de seletores para melhorar a precisão dos estilos aplicados.
- **Mixins:** Reutilização de estilos com mixins para evitar repetição de código.

### Boas práticas de HTML e SEO

- **HTML semântico:** Uso de tags semânticas (ex: `<header>`, `<main>`, `<footer>`).
- **SEO:** Meta tags apropriadas e bons atributos `alt` em imagens.

## Contato

Para mais informações, entre em contato pelo email:

- guilherme.henricastro@gmail.com
