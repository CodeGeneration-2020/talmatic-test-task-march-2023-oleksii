module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },

  globals: {
    google: 'writable',
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },

  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],
    semi: 'off',
    '@typescript-eslint/semi': ['off', 'never'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        printWidth: 120,
        bracketSpacing: false,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        trailingComma: 'all',
      },
    ],
    'react/function-component-definition': [2, {namedComponents: 'arrow-function'}],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'warn',
    '@typescript-eslint/no-empty-interface': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/prop-types': 'off',
  },

  overrides: [
    {
      files: [
        '**/*.tests.tsx',
        '**/*.spec.tsx',
        '**/*.tests.ts',
        '**/*.spec.ts',
        '**/*.stories.tsx',
        '**/__mock__/**/*.ts',
      ],

      env: {
        jest: true,
      },

      plugins: ['jest'],

      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },

    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
