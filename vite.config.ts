import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.11', // This allows access from your local network
    port: 5173,       // You can change this if needed
  },
})
