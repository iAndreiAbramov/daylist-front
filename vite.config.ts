import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lib: '/src/lib',
      pages: '/src/pages',
      assets: '/src/assets',
      styles: '/src/styles',
    },
  },
});
