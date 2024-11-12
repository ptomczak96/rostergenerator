import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  root: path.join(__dirname, 'src'),
  build: {
    outDir: '../build',
    emptyOutDir: true
  }
})