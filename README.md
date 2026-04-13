# Robles Web Programming - Long Exam 1

This repository contains a React frontend built with Vite, React Router, and Tailwind CSS.

The current project is **BulldogEx Shop**, a low-fidelity e-commerce wireframe for campus products. It includes a full-width hero banner, product catalog cards, product detail pages, store information pages, shared layouts, and authentication screens.

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS 4
- ESLint

## Main Features

- Full-width e-commerce hero section with background image overlay
- Product listing page with reusable product cards
- Product detail page with price, category, stock, description, and action buttons
- Store-focused home, about, footer, and not found pages
- Authentication pages for sign in and sign up
- Shared layout, navbar, footer, and button components

## Project Setup

Install dependencies inside the client app:

```bash
cd robles-client
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Current Routes

- `/` - Home page
- `/about` - About page
- `/products` - Product list page
- `/products/:name` - Single product page
- `/auth/signin` - Sign in page
- `/auth/signup` - Sign up page

## Key Files

- `src/assets/product-content.js` - product data used by the catalog and product pages
- `src/components/ProductCard.jsx` - reusable product card component
- `src/components/ProductList.jsx` - product grid component
- `src/pages/LandingPages/ProductListPage.jsx` - product catalog page
- `src/pages/LandingPages/ProductPage.jsx` - single product detail page
- `src/pages/LandingPages/HomePage.jsx` - landing page with full-width hero banner

## Current File Structure

```text
long-exam1/
├── README.md
└── robles-client/
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── assets/
        │   ├── hero.png
        │   ├── product-content.js
        │   ├── react.svg
        │   ├── vite.svg
        │   ├── img/
        │   │   ├── nu_bulldogex_banner.jpg
        │   │   └── nubdexchange_logo.png
        │   └── styles/
        │       └── index.css
        ├── components/
        │   ├── Button.jsx
        │   ├── Footer.jsx
        │   ├── NavBar.jsx
        │   ├── ProductCard.jsx
        │   └── ProductList.jsx
        ├── layouts/
        │   ├── AuthLayout.jsx
        │   └── Layout.jsx
        └── pages/
            ├── NotFoundPage.jsx
            ├── AuthPages/
            │   ├── SignInPage.jsx
            │   └── SignUpPage.jsx
            └── LandingPages/
                ├── AboutPage.jsx
                ├── ProductListPage.jsx
                ├── ProductPage.jsx
                └── HomePage.jsx
```

## Notes

- `node_modules/` and `dist/` are not included in the structure above because they are generated folders.
- The application uses `Layout.jsx` for public pages and `AuthLayout.jsx` for authentication pages.
- Product routes use the product `name` value from `product-content.js` as the URL slug.
