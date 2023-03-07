module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    // 'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
