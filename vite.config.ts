import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Konfiguruje Vite dev server pro správné servování statických souborů
    middlewareMode: false,
  },
  // Zajišťuje, že statické soubory v public/ jsou správně serovovány
  publicDir: 'public'
})
