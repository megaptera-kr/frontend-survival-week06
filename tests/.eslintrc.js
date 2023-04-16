module.exports = {
  env: {
    jest: false,
  },
  extends: ['plugin:codeceptjs/recommended', 'plugin:playwright/playwright-test'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
