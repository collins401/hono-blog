import js from "@eslint/js";
import eslintPrettier from "eslint-plugin-prettier";
import globals from "globals";
import ts from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["dist/", ".vscode/", ".husky/"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      prettier: eslintPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "max-lines": [
        "error",
        { max: 680, skipBlankLines: true, skipComments: true },
      ],
    },
  },
];
