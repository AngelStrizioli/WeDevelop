module.exports = {
  preset: 'react-native',
  displayName: 'codebase',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
    '<rootDir>/__mocks__/globalMock.js',
  ],
  transform: {
    '^.+\\.(jsx?)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  timers: 'fake',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/src/**/__tests__/**/*.[jt]s?(x)',
    '!**/.history/**/*.[jt]s?(x)',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  globals: {
    window: {},
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community)',
  ],
};
