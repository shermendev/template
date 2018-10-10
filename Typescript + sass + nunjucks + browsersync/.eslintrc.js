module.exports = {
  "parser": "typescript-eslint-parser",
  "plugins": [
    "typescript"
  ],
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "typescript/explicit-function-return-type": ["error", {
      allowExpressions: true
    }],
    "typescript/class-name-casing": ["error"],
    "typescript/interface-name-prefix": ["error"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: ["error", "single"],
    "space-in-parens": ["error", "never"],
    semi: ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "max-len": [
      "error",
      {
        code: 120
      }
    ],
    "no-unused-vars": ["error", {
      "vars": "all"
    }],
    "sort-imports": ["error"],
    "sort-keys": ["error"],
    "sort-vars": ["error"]
  }
}
