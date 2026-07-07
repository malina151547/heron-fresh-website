# Project Guidelines: Heron Fresh B2B Website

This project is a high-end, responsive B2B website built using Next.js 14 App Router, Tailwind CSS, TypeScript, GSAP, and Three.js (React Three Fiber).

## Code Style & Architecture
* **Framework**: React 18+ inside Next.js 14 App Router. Use Server Components by default; only use `'use client'` when React State, context, browser APIs, or custom animation libraries (GSAP, Framer Motion, R3F Canvas) are required.
* **TypeScript**: Enforce strict type checking. Do not use `any`. Define interfaces for all component props.
* **Styling**:
  * Use Tailwind CSS for structural grid, flex, padding, margins, and standard responsive layout classes.
  * Use CSS Variables in `src/app/globals.css` for the design system tokens:
    * Forest Green: `#0F4C2A`
    * Bright Lime Green: `#74B72E`
    * Light Cream: `#F4F7F2`
    * Deep Slate/Dark Background: `#06120B`
  * Use custom CSS properties for complex glassmorphism, background-filters, and transitions.

## Animation & Visual Standards
* **Smooth Scrolling**: Utilize Lenis smooth scroll for uniform physical scroll simulation across browsers.
* **GSAP & ScrollTrigger**:
  * Bind GSAP animations to `ScrollTrigger` timelines for scrollytelling.
  * Always clean up GSAP animations on component unmount (`gsap.context` or `useGSAP` cleanup).
  * Ensure all motion handles `@media (prefers-reduced-motion: reduce)` gracefully.
* **Three.js (React Three Fiber)**:
  * Render Three.js canvas components using lazy loading (`next/dynamic` with `ssr: false`) to avoid server-side compilation issues and improve initial page load.
  * Procedurally generate 3D fruit shapes and lighting rather than loading heavy external files, ensuring high performance.

## SEO & Accessibility Best Practices
* **Header Structure**: Use exactly one `<h1>` per page with a clean semantic hierarchy (`<h2>` to `<h6>`).
* **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<footer>`, and `<nav>` appropriately.
* **Unique Interactive IDs**: Assign unique, descriptive `id` attributes to all forms, primary buttons, input fields, and interactive triggers for browser-based automation and testing.
* **Interactive Elements**: Maintain robust focus states (`focus-visible:ring-2`) and clear labels (`aria-label`) for accessibility compliance.
