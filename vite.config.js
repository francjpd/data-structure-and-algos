import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['src/math/*.js']
  }
})
