module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setupTests.ts',
    'jest-styled-components',
  ],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            jsx: true,
            decorators: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
