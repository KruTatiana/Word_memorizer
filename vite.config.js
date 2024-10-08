import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api": {
        target: "https://itgirlschool.justmakeit.ru",
        changeOrigin: true,
      },
    },
  },
  base: '/Word_memorizer'
});
