// vite.config.ts
import react from "file:///Users/serhiihovorovskyi/Desktop/learn/email-local/node_modules/@vitejs/plugin-react/dist/index.mjs";
import autoprefixer from "file:///Users/serhiihovorovskyi/Desktop/learn/email-local/node_modules/autoprefixer/lib/autoprefixer.js";
import postcssLogical from "file:///Users/serhiihovorovskyi/Desktop/learn/email-local/node_modules/postcss-logical/dist/index.mjs";
import { defineConfig } from "file:///Users/serhiihovorovskyi/Desktop/learn/email-local/node_modules/vite/dist/node/index.js";
import { TanStackRouterVite } from "file:///Users/serhiihovorovskyi/Desktop/learn/email-local/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
import tailwindcss from "file:///Users/serhiihovorovskyi/Desktop/learn/email-local/node_modules/tailwindcss/lib/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/serhiihovorovskyi/Desktop/learn/email-local";
var vite_config_default = defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: [postcssLogical, autoprefixer, tailwindcss()]
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "@/styles/breakpoints.scss" as *;`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2VyaGlpaG92b3JvdnNreWkvRGVza3RvcC9sZWFybi9lbWFpbC1sb2NhbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NlcmhpaWhvdm9yb3Zza3lpL0Rlc2t0b3AvbGVhcm4vZW1haWwtbG9jYWwvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NlcmhpaWhvdm9yb3Zza3lpL0Rlc2t0b3AvbGVhcm4vZW1haWwtbG9jYWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuaW1wb3J0IHBvc3Rjc3NMb2dpY2FsIGZyb20gJ3Bvc3Rjc3MtbG9naWNhbCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFRhblN0YWNrUm91dGVyVml0ZSB9IGZyb20gJ0B0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGUnXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtUYW5TdGFja1JvdXRlclZpdGUoe1xufSkscmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3Bvc3Rjc3NMb2dpY2FsLCBhdXRvcHJlZml4ZXIsIHRhaWx3aW5kY3NzKCldLFxuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLFxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJAL3N0eWxlcy9icmVha3BvaW50cy5zY3NzXCIgYXMgKjtgXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsT0FBTyxXQUFXO0FBQzFWLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sb0JBQW9CO0FBQzNCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsMEJBQTBCO0FBQ25DLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sVUFBVTtBQU5qQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsbUJBQW1CLENBQy9CLENBQUMsR0FBRSxNQUFNLENBQUM7QUFBQSxFQUNSLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxnQkFBZ0IsY0FBYyxZQUFZLENBQUM7QUFBQSxJQUN2RDtBQUFBLElBQ0EscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osS0FBSztBQUFBLFFBQ0wsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
