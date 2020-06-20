module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },

  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],

  settings: {
    react: {
      version: "detect",
    },
  },
};
