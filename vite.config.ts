import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Načteme environment variables, abychom je mohli bezpečně předat do aplikace
  // Fix: Cast process to any to avoid TypeScript error 'Property cwd does not exist on type Process'
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Toto zajistí, že process.env.API_KEY bude fungovat i v prohlížeči
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})