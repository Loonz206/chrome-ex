module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "sonarjs",
    "react-hooks",
    "prettier",
    "security",
    "jsx-a11y"
  ],
  rules: {},
  settings: {
    react: {
      version: "detect"
    }
  }
};
