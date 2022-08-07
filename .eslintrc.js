module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      env: {
        es2022: true,
        browser: true
      },
      extends: ['standard', 'eslint-config-prettier'],
      globals: {
        JSX: 'readonly'
      },
      rules: {
        'no-unused-vars': 'warn'
      }
    },
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ]
}
