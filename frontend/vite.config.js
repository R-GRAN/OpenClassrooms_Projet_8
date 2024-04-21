import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/OpenClassrooms_Projet_8/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
