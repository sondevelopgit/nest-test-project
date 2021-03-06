module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "airbnb"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    "no-case-declarations": "off",
    "prefer-rest-params": "off",
    "no-useless-escape": "off",
    "no-extra-parens": "off",
    "no-undef-init": "off",
    "no-tabs": "off",
    "no-multi-str": "off",
    "no-multi-spaces": "off",
    "no-inner-declarations": "off",
    "no-fallthrough": "off",
    "no-extra-boolean-cast": "off",
    "no-eval": "off",
    "no-caller": "off",
    "camelcase": "off",
    "no-multiple-empty-lines": "off",
    "quotes": "off",
    "space-before-function-paren": "off",
    "eqeqeq": "off",

    "indent": ["warn", 4, { "SwitchCase": 1, "ArrayExpression": "off", "ImportDeclaration": "off" }],
    "semi": "error",
    "no-unused-vars": "off",
    "no-nested-ternary": "off",
    "curly": "warn",

    "keyword-spacing": ["warn", { "overrides": { "this": { "before": false } } }],
    "space-infix-ops": "warn",
    "brace-style": "warn",
    "handle-callback-err": "warn",
    "operator-linebreak": "warn",
    "no-cond-assign": "warn",
    "block-spacing": "warn",
    "comma-dangle":"warn",
    "comma-style": "warn",
    "dot-location":"off",
    "func-call-spacing": "warn",
    "key-spacing": "warn",
    "new-cap":"off",
    "new-parens": "warn",
    "accessor-pairs":"warn",
    "constructor-super":"warn",
    "no-array-constructor": "warn",
    "no-class-assign": "warn",
    "no-const-assign": "warn",
    "no-constant-condition":"warn",
    "no-control-regex":"warn",
    "no-delete-var": "warn",
    "no-dupe-args":"warn",
    "no-dupe-class-members": "off",
    "no-dupe-keys":"warn",
    "no-duplicate-case": "warn",
    "no-duplicate-imports": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-regex-spaces": "warn",
    "no-ex-assign": "warn",
    "no-invalid-regexp": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-floating-decimal": "warn",
    "no-func-assign": "warn",
    "no-implied-eval": "warn",
    "no-irregular-whitespace": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-lone-blocks": "warn",
    "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
    "no-new-object": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-path-concat": "warn",
    "no-proto": "warn",
    "no-prototype-builtins": "off",
    "no-return-assign": "warn",
    "no-self-assign": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "no-unreachable": "warn",
    "no-unsafe-negation": "warn",
    "no-useless-computed-key": "warn",
    "object-property-newline": "off",
    "rest-spread-spacing": "warn",
    "semi-spacing": "warn",
    "yield-star-spacing": "warn",
    "yoda": "warn",
    "wrap-iife": "warn",
    "space-unary-ops":"warn",
    "space-in-parens": "warn",
    "space-before-blocks": "warn",
    "use-isnan": "error",
    "template-curly-spacing": "error",
    "no-whitespace-before-property": "error",
    "no-useless-rename": "error",
    "no-unsafe-finally": "error",
    "no-unmodified-loop-condition": "error",
    "no-this-before-super": "error",
    "no-template-curly-in-string": "error",
    "no-sparse-arrays":"error",
    "no-shadow-restricted-names": "error",
    "no-sequences": "error",
    "no-redeclare": "error",
    "no-new-symbol": "error",
    "no-new-require": "error",
    "no-new-func": "error",
    "no-new": "error",
    "no-labels": "error",
    "no-global-assign": "error",

    "no-async-promise-executor": "off"
  },
};
