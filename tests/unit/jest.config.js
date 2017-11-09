const path = require('path')

module.exports = {
	rootDir: path.resolve(__dirname, '../../'),
	roots: [
		'<rootDir>/src',
	],
	moduleFileExtensions: [
		'js',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	transform: {
		'^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
		'.*\\.(vue)$': '<rootDir>/node_modules/jest-vue',
	},
	mapCoverage: true,
	snapshotSerializers: [
		'<rootDir>/node_modules/jest-serializer-vue',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
	],
	setupFiles: [
		'<rootDir>/tests/unit/jest-setup',
	],
	notify: true,
	collectCoverageFrom: ['**/*.{js,jsx,vue}'],
}
