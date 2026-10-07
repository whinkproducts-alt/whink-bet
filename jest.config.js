/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathPattern: ['src/__tests__'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: { moduleResolution: 'node' } }],
  },
}

module.exports = config
