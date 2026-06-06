import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { noscriptPlugin } from './noscript-plugin';

export default defineConfig({
  plugins: [react(), noscriptPlugin()],
  base: '/energy/',
});
