import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "client",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
    open: true,
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
  // build: {
  //   outDir: "../dist",
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: "client/index.html",
  //   },
  // },
});
