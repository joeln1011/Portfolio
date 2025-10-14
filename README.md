# Joel Nguyen — Portfolio

Live site: https://www.joelnguyendev.com

A modern, responsive portfolio showcasing experience, education, skills, and projects. Built with React and Material UI, featuring smooth animations, a projects carousel, and mobile‑first layouts.

## Features
- Responsive layout (mobile, tablet, desktop)
- React Router navigation with active link highlighting
- Material UI theme, components, and icons
- Animated hero and background bars
- Projects carousel with live/demo and GitHub links
- Resume sections: Experience, Education, Skills
- Downloadable resume (from public folder)
- Accessibility and performance‑minded styling

## Tech Stack
- React (Vite)
- Material UI (MUI)
- React Router
- Styled components via MUI `styled`
- JavaScript (ES6+)

## Getting Started
Prerequisites: Node.js 18+ and npm (or Yarn).

Install:
```bash
npm install
```

Run dev server:
```bash
npm run dev
```

Build:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Base URL (subpath) deployment
If serving under a subpath (e.g., /Portfolio/ on GitHub Pages):
- Set Vite base in `vite.config.(js|ts)`:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
});
```
- Use `BrowserRouter` with a basename:
```jsx
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter basename="/Portfolio">{/* app */}</BrowserRouter>
```
- Keep public assets (e.g., resume) in `public/` and link as `/Portfolio/resume/HungNguyenResume.pdf`.

## Project Content
- Update social links in `HomePage.jsx`
- Replace resume PDF in `public/resume/HungNguyenResume.pdf`
- Edit projects in `src/pages/ProjectsPage/ProjectsPage.jsx`
- Edit services in `src/pages/ServicesPage/ServicesPage.jsx`
- Edit experience, education, and skills in `src/pages/ResumePage/**`

## Deploy
- Vercel/Netlify: deploy the build output (`dist/`) directly (no subpath needed).
- GitHub Pages: ensure `base: '/Portfolio/'` as above, then publish `dist/`.

## License
Personal portfolio source code. Feel free to reference structure and techniques; content and assets remain the author’s.
