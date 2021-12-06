# DPC Next Boilerplate Project

This is the beginning of a boilerplate for react projects

---

## Tech Stack so far

### - **NextJS** (https://nextjs.org)

Main react framework. Routing and SSR and misc utilities.

### - **Redux Toolkit** (https://redux-toolkit.js.org)

Global state management. Includes Redux Thunk out of the box for asynchronous actions

### - **Mock Service Worker (MSW)** (https://mswjs.io/)

Mock API using service worker. Works both in the client and on the server.

### - **Tailwind CSS** (https://tailwindcss.com/)

Fast styling using JIT stylesheet generation

### - **React Testing Library** (https://testing-library.com/react)

Component unit testing

---

## Source code structure

```
src
 |- api         Everything related to API calls
 |- store       Redux store
 |- pages       Next JS page structure
 |- containers  Container components
 |- ui          Presentational components
 |- types       Type definitions
 |- hooks       Custom hooks

```

---

## Demo application

A simple e-commerce web application.

- / - Home page
- /products/prodcuts_dynamic - Product list
- /products/prodcuts_static - Product list
- /products/[id] - Product detail page (statically generated)

---

## Installation and starting development server

```
git clone https://github.com/dpc-nordics/dpc-next
cd dpc-next
yarn install
yarn dev
```

## To build and run optimised build

```
yarn build
yarn start
```

---

## Mock API

To use the mocked API. Make sure that this environment flag is set in relevant .env file

```
NEXT_PUBLIC_API_MOCKING_ENABLED="1"
```

---

## TODO

- UI Component Library
- Storybook
- E2E Testing. Playwrite?
- Monorepo support
- Flesh out the demo application
- etc...

---

## Commands run when creating boilerplate

```
yarn create next-app --example with-redux dpc-next
cd dpc-next
yarn add msw
npx msw init
yarn next lint (selecting strictyarn )
yarn remove eslint && yarn add --dev eslint@"<8.0.0"
yarn add -D tailwindcss autoprefixer postcss
```
