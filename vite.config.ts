import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        research: path.resolve(__dirname, 'research.html'),
        publications: path.resolve(__dirname, 'publications.html'),
        diplomacyDay: path.resolve(__dirname, 'diplomacy-day.html'),
        leadership: path.resolve(__dirname, 'leadership.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      },
    },
  },

  server: {
    allowedHosts: ['.serveousercontent.com'],

    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})