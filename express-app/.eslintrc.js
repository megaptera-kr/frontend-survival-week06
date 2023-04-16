module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: ['xo-typescript'],
			files: ['*.ts'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
