# MixologyHub

**MixologyHub** is a beverage recipe application that allows you to explore a wide variety of drink recipes sourced from an external API. With this app, you can:

- View detailed drink recipes, including ingredients and instructions.
- Save your favorite drinks for quick access.
- Navigate between multiple pages using React Router.
- Display drink images in interactive modals.

MixologyHub is built with **React** and provides an interactive experience for drink enthusiasts using modals, `react-router`, and favorite management features.

## Demo

Check out the live demo of **MixologyHub** here: [MixologyHub Demo](https://magnificent-bombolone-192394.netlify.app/)

![MixologyHub Screenshot](./public/Screenshot.png)

## Features

- **React Router:** Enables smooth navigation between pages.
- **Interactive Modals:** Provides a detailed view of drinks.
- **Favorite Management:** Save drinks as favorites for easy access later.
- **API Integration:** Fetch data from an external API for drink recipes.

## Installation

To set up and run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mixologyhub.git
cd mixologyhub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build the project for production

```bash
npm run build
```

## Libraries and Tools

### React Router

React Router is used for client-side routing in this application. It allows navigation between different pages without reloading the entire app.

To install:

```bash
npm install react-router-dom
```

Learn more about React Router:
- [React Router DOM on NPM](https://www.npmjs.com/package/react-router-dom)

### React Hook Form

React Hook Form helps in creating performant, flexible forms with built-in validation. This is used in the app for managing forms efficiently.

To install:

```bash
npm install react-hook-form
```

Learn more:
- [React Hook Form on NPM](https://www.npmjs.com/package/react-hook-form)
- [React Hook Form Official Site](https://react-hook-form.com/)

### Zustand

Zustand is used for state management in the app. It's simple and lightweight, perfect for managing global state across different components.

To install:

```bash
npm install zustand
```

Learn more:
- [Zustand on NPM](https://www.npmjs.com/package/zustand)

### Heroicons

Heroicons provides beautiful, hand-crafted SVG icons. It's used in this project to enhance the UI design.

To install:

```bash
npm install @heroicons/react
```

Learn more:
- [Heroicons Official Site](https://heroicons.com/)

### Axios

Axios is a promise-based HTTP client used to make requests to the drink API.

To install:

```bash
npm install axios
```

Learn more:
- [Axios on NPM](https://www.npmjs.com/package/axios)

### Zod

Zod is a schema declaration and validation library used to validate API responses.

To install:

```bash
npm install zod
```

Learn more:
- [Zod on NPM](https://www.npmjs.com/package/zod)

### Headless UI

Headless UI provides unstyled, fully accessible components designed to integrate with Tailwind CSS.

To install:

```bash
npm install @headlessui/react
```

Learn more:
- [Headless UI - Dialog Component](https://headlessui.com/react/dialog)

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework used to style the application.

To install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your `tailwind.config.js` file:

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

Add Tailwind's directives to your `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Learn more:
- [Tailwind CSS Setup](https://tailwindcss.com/docs/guides/vite)

## Usage

1. Browse and explore a wide variety of drink recipes sourced from an external API.
2. View detailed information for each drink, including ingredients and preparation instructions.
3. Save drinks to your list of favorites for easy access later.
4. Utilize the app's intuitive UI to navigate between pages and interact with drink modals.

## Contributing

Contributions are welcome. If you wish to improve this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
