# Nuke App

An open source frontend application built using the **React** ⚛️ and **Feature-Sliced Design** 🍰.

> This app is a work in progress. See the roadmap below.

- React, Redux Toolkit, React Hook Form, Zod
- Vite, TypeScript, Postcss
- Feature Sliced

## Live demo

![](./public/preview@dark.png#gh-dark-mode-only)![](./public/preview@light.png#gh-light-mode-only)

- [nukeapp.netlify.app](https://nukeapp.netlify.app/)

## About project

Right now, I'm using this project as an experiment polygon to try modern technologies and see how a can see frontend application in {CURRENT_YEAR}. This project structure combines clean architecture and feature sliced methodology.

## Features

- Fully Typed (API adapters, catched error with type guards, form and env variables validators by `zod`)
- Developing by Feature Sliced Design (Layers)
- Fully API emulation with `mswjs` (all enpoints with JWT authorization)
- Storybook stories
- Best practice comments in code

# Roadmap

App logic:

- [ ] Add droduct page
- [ ] Add ecom cart logic
- [ ] Add ecom order logic
- [ ] Add stock logic (available of products)

Technologies:

- [ ] CSS Modules → Tailwind CSS
- [ ] Redux Toolkit Query → React Query
- [ ] Redux Toolkit → Zustand
- [ ] Vite → NextJS in SPA mode

Other:

- [ ] Fix TODO into code
- [ ] Fix FSD errors
- [ ] Write storybook stories
- [ ] Write article to my blog about main concepts
- [ ] Add Dark theme
- [ ] Add I18n
- [ ] Add FSD public API pattern
- [ ] Write screenshot tests for stories
- [ ] Write Integration tests for user's use cases

## Running locally

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env.local`

```bash
cp .env.example .env.local
```

3. Start Vite development server

```bash
npm start
```

or start Storybook stand

```bash
npm run storybook
```

## License

Licensed under the MIT license.
