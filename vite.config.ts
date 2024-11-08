import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postcssLogical from 'postcss-logical';
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [TanStackRouterVite({
}),react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [postcssLogical, autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@import "@/styles/breakpoints.scss";`
      },
    },
  },
});
