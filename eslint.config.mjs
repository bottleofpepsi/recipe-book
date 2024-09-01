import pluginJs from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {    
        languageOptions: {
            globals: globals.browser,
        },
        ignores: [
            "webpack.config.js",
            "tsconfig.json",
            "dist/**/*",
            "node_modules/**/*",
        ],
        plugins: {
            "simple-import-sort": simpleImportSort,
            "react": reactPlugin,
        },
        rules: {
            "simple-import-sort/imports": "warn",
            "simple-import-sort/exports": "warn",
        },
        files: ["**/*.tsx", "**/*.jsx"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json",
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
