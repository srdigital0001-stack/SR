
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Mapping common API key names to ensure compatibility with various deployment platforms like Vercel
  const apiKey = env.API_KEY || env.GEMINI_API_KEY || env.VITE_API_KEY || "";
  
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      target: 'esnext'
    },
    server: {
      port: 3000,
      host: true
    }
  };
});
