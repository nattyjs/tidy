/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
      '^.+\\.ts?$': [
        'ts-jest'
      ],
    },
    "coverageDirectory": "./coverage",
    testEnvironment: 'node',
    resetMocks: true,
    clearMocks: true,
    preset: 'ts-jest/presets/default-esm',
    setupFilesAfterEnv: ["../../jest.setup.ts"],
    "testPathIgnorePatterns": ["examples", "dist","packages/core/__tests__/common", "packages/cli/src"]
  };