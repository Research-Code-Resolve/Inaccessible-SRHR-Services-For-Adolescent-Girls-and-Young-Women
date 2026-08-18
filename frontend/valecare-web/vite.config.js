import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // ignore the assets folder to avoid OS file-lock watch errors
      ignored: [
        '**/src/assets/**'
      ]
    }
  },
})
