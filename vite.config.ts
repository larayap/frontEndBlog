import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontEndBlog/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backendblog-919v.onrender.com',  // Cambia esto con la URL de tu servidor Django
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
