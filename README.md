# MixologyHub

**MixologyHub** is a beverage recipe application that lets you explore a wide variety of drink recipes sourced from an external API. With this app, you can:

- View detailed drink recipes, including ingredients and instructions.
- Save your favorite drinks for quick access.
- Navigate between multiple pages using React Router.
- Display drink images in interactive modals.

MixologyHub is built with React and provides an interactive experience for drink enthusiasts using modals, react-router, and favorite management features.

![Instalacion de react-router](https://www.npmjs.com/package/react-router-dom)

The react-router-dom package contains bindings for using React Router in web applications. 

```bash
npm install react-router-dom
```


![Instalacion de react-hook-form](https://www.npmjs.com/package/react-hook-form)
![react-hook-form page](https://react-hook-form.com/)


Performant, flexible and extensible forms with easy-to-use validation.

Installing React Hook Form only takes a single command and you're ready to roll.

```bash
npm install react-hook-form
```

![Istalation zustand](https://www.npmjs.com/package/zustand)

```bash
npm install zustand
```

![heroicons](https://heroicons.com/)

Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.

@heroicons/react from npm:

```bash
npm install @heroicons/react
```


![axios](https://www.npmjs.com/package/axios)

```bash
npm install axios
```


![zod](https://www.npmjs.com/package/zod)

Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.

```bash
npm install zod
```

![headlessui](https://headlessui.com/react/dialog)

Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

```bash
npm install @headlessui/react
```




![Install Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Navigate between multiple pages using React Router
en este paso aprendimos a utilizar cosas como react-router he implementar cosas como:

Link, NavLink

Outlet: implementacion de Layouts para reutilizar componentes

BrowserRouter, Route, Routes : quiero un ejemplo practico

el hook de useLocation