import { defineConfig } from 'vite';

// Allows overriding base for GitHub Pages via env var VITE_BASE (e.g. "/repo-name/")
// Defaults to "/" which works for Netlify, Vercel and custom domains.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
});

