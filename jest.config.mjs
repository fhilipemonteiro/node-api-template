/** @type {import('jest').Config} */
export default {
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec).ts'],
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
