export default {
    testMatch: ['**/*.test.js'],
    collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
    coverageDirectory: './coverage',
    coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
    testEnvironment: 'jsdom'
};
