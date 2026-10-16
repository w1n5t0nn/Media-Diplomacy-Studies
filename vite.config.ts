import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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