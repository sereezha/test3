import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postcssLogical from 'postcss-logical';
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from "tailwindcss";
import path from "path"

export default defineConfig({
  plugins: [TanStackRouterVite({
}),react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [postcssLogical, autoprefixer, tailwindcss()],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/breakpoints.scss" as *;`
      },
    },
  },
});
