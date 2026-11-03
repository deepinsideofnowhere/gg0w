import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // BASE_PATH задаёт GitHub Actions: '/gg0w' для адреса с подпапкой, пусто для своего домена
  base: `${process.env.BASE_PATH ?? ''}/`,
  plugins: [react(), tailwindcss()],
})
