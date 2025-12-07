import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@api': resolve('src/api'),
      '@common': resolve('src/common'),
      '@core': resolve('src/core'),
      '@features': resolve('src/features'),
      '@i18n': resolve('src/i18n'),
    },
  },
});
