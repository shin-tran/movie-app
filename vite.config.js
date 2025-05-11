import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
