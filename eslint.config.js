// eslint.config.js
import { defineConfig } from 'eslint-define-config'
import js from '@eslint/js'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'
import { tanstackConfig } from '@tanstack/eslint-config'
import globals from 'globals'

export default defineConfig([
  // Ignore build artifacts and logs globally
  {
    ignores: ['dist/', 'build/', 'coverage/', '*.log'],
  },

  // Base configs from tanstack and eslint recommended for JS
  ...tanstackConfig,
  js.configs.recommended,

  // TypeScript configs - use the parser and plugin properly
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.es2021, ...globals.browser },
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      // Example of overriding TS rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // React hooks recommended rules
      ...reactHooks.configs.recommended.rules,
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // Prettier disables conflicting rules - apply last
  prettier,
])
