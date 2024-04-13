<br />
<div align="center">
  <a href="https://github.com/gatodemontecristo/travel-project">
     <img src="https://github.com/gatodemontecristo/travel-project/blob/main/public/assets/marca_peru.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Proyecto Perú Travel vs1</h3>

  <p align="center">
    Landing page sobre destinos turisticos del Perú basado en el curso de TailwindCSS de PLatzi (100% responsiva)
    <br />
    <a href="https://tailwindcss.com/"><strong>Documento de TailwindCSS»</strong></a>
    <br />
  </p>
</div>

### Realizado con

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* 	![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* 	![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* 	![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
* 	![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Páginas/librerías usadas

Página de iconos -> https://heroicons.com/

Página de Mockups -> https://shots.so/

Generador de identificadores -> https://www.npmjs.com/package/uuid

Framework para la traducción -> https://www.i18next.com/

### Aplicación en escritorio

![718shots_so](https://github.com/gatodemontecristo/travel-project/assets/61488294/de9d2941-7873-4237-8e62-7dab3f469631)

### Aplicación en celulares

![419shots_so](https://github.com/gatodemontecristo/travel-project/assets/61488294/95be4e49-0c6a-4326-a05f-82cd913c6dac)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
