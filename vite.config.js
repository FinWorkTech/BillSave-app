import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/features'),
      '@public': path.resolve(__dirname, './src/public'),
      '@svg': path.resolve(__dirname, './src/assets/images/svg'),
      '@webp': path.resolve(__dirname, './src/assets/images/webp'),
    }
  }
})
