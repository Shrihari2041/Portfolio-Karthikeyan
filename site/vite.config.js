import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works on any host / subpath
// (Netlify, Vercel, GitHub Pages, plain static hosting).
export default defineConfig({
  base: './',
  plugins: [react()],
})
