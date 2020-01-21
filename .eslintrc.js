module.exports = {
  'plugins': ['jest'],
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest/globals': true,
  },
  'extends': [
    'google',
    'plugin:jest/all',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'max-len': ['error', {code: 120}],
    'require-jsdoc': ['off'],
    "indent": ['error', 2],
  },
};
