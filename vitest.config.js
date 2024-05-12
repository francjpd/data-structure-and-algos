import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      'src/warm-up/*.js',
      'src/math/*.js',
      'src/sorting/*.js',
      'src/arrays/*.js'
    ]
  }
})
