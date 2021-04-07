module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js?$': '<rootDir>/jest/jest.preprocess.js',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/file.mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
    __BASE_PATH__: '',
  },
  setupFiles: ['<rootDir>/jest/loadershim.js'],
};
