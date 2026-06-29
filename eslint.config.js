import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-debugger': 'error',
      'no-console': 'warn',
    },
  },
];
