module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'object-curly-spacing': ['error', 'always'],
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'max-len': ['error', { 'code': 100 }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
