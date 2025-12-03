import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/',
  
  // Añade esta configuración para assets públicos
  publicDir: 'public',
  
  build: {
    // Configuración para manejar assets
    assetsInlineLimit: 4096, // Archivos menores a 4kb se inlinenan
    rollupOptions: {
      // Evita procesar archivos en public/ como módulos
      external: [
        /^\/imgs\//,
        /^\/videos\//
      ]
    }
  },
  
  // Resolución de alias para desarrollo
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

