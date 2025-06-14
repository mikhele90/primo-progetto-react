import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Rimuovi completamente o commenta la sezione 'esbuild' se tutti i tuoi file con JSX sono stati rinominati in .jsx
  // esbuild: {
  //   loader: 'jsx',
  //   include: /src\/.*\.js$/,
  // },
  server: {
    // Questa è la configurazione cruciale per il routing lato client
    historyApiFallback: true,
  },
  // Se hai altre configurazioni (es. 'define', 'resolve.alias'), mantienile qui
});