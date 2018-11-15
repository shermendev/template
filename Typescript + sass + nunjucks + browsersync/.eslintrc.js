module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript', 'array-func', 'import', 'promise', 'sort-destructure-keys', 'unicorn'],
  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:array-func/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],
  env: {
    es6: true,
    "browser": true
    // "jquery": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
  overrides: [{
    files: ['src/**/*.ts'],
    rules: {
      'import/prefer-default-export': 0,
      'typescript/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true
        }
      ],
      'arrow-body-style': [1, 'as-needed', {
        requireReturnForObjectLiteral: true
      }],
      curly: 1,
      'function-paren-newline': [1, {
        minItems: 5
      }],
      'import/no-extraneous-dependencies': 1,
      indent: [1, 2, {
        SwitchCase: 1
      }],
      'lines-between-class-members': 1,
      'no-else-return': 1,
      'object-curly-newline': [
        1,
        {
          ImportDeclaration: {
            multiline: true,
            minProperties: 5
          },
          ObjectExpression: {
            multiline: true,
            minProperties: 1
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 5
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 5
          }
        }
      ],
      'padding-line-between-statements': [
        1,
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var', 'if', 'import', 'function', 'class', 'export', 'switch', 'for'],
          next: '*'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['const', 'let', 'var', 'return', 'if', 'function', 'class', 'export', 'switch', 'for']
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var']
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: 'import'
        }
      ],
      quotes: [1, 'backtick'],
      'sort-destructure-keys/sort-destructure-keys': 1,
      'sort-keys': 1,
      'unicorn/filename-case': 0,
      'unicorn/prefer-spread': 0,
      // can't resolve .ts
      'import/no-unresolved': 0
    }
  }, ],
}
