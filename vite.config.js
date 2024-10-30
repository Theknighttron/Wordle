import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      "/wordle-words": {
        target: "https://api.frontendexpert.io",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/wordle-words/, "/api/fe/wordle-words"),
      },
    },
  },
});
