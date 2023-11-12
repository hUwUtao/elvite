import { defineConfig, Alias } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from "./package.json"

function aliased(r: Record<string, string>): Alias[] {
  return Object.keys(r).map((k) => ({
    find: k,
    replacement: r[k],
  }))
}

function esmsh(): Alias[] {
  return pkg.cdnDependencies.map((k) => ({
    find: new RegExp(`^(${k}[/]?.*)$`),
    replacement: `https://esm.sh/$1?bundle`,
  }))
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      ...aliased({
        "@": "/src",
      }),
      ...esmsh(),
    ],
  },
})
