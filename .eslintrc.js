module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    "padded-blocks": [1, { "blocks": "always", "classes": "always", "switches": "never" }, { "allowSingleLineBlocks":true }],
    "@typescript-eslint/consistent-type-definitions": 0
  }
}
