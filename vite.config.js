import { defineConfig } from 'vite';

// GitHub Pages Project URL: https://IchigoVal.github.io/hebammeMarina/
// Für andere Hoster (Cloudflare Pages / Custom Domain) bleibt base normalerweise "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/hebammeMarina/',
});
