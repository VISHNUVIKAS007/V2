import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/V2/', // Must match your repo name
  plugins: [react()],
});