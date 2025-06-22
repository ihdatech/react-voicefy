import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        popup: "src/popup.html",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  plugins: [react()],
});
