import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./setupTest.js'],
    include: [
      'src/warm-up/*.js',
      'src/math/*.js',
      'src/sorting/*.js',
      'src/arrays/*/*.js'
    ]
  }
})
