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
      }
    },
    {
      files: ['*.astro'],
      extends: ['plugin:astro/all'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ]
}
