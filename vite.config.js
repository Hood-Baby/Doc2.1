import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Doc2.1/',
  // ...other config
})

  plugins: [react()],
})
