import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({base: '/sample-app/', plugins: [react()], resolve: {dedupe: ['react','react-dom','@xyflow/react']}, server: {port: 5183}})
