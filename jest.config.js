module.exports = {
  // ...
  automock: false,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  globals: {
    // Add useNavigate to the list of allowed objects
    'ts-jest': {
      diagnostics: false,
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.json',
          diagnostics: false,
        },
        __DEV__: true,
        useNavigate: true,
      },
    },
  },
};
