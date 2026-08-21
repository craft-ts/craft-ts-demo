/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import { craftTextLoaderPlugin } from './vite-text-loader-plugin.mjs';

export default defineConfig({
  plugins: [craftTextLoaderPlugin()],
  server: {
    port: 4200,
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false,
      },
    },
  },
});
