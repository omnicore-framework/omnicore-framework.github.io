import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores
  {
    ignores: ['dist/**/*', '.astro/**/*', 'node_modules/**/*'],
  },

  // Base TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Astro recommended rules
  ...eslintPluginAstro.configs.recommended,

  {
    // Specific configuration for Astro files to handle TypeScript frontmatter
    files: ['**/*.astro'],
    languageOptions: {
      parser: (await import('astro-eslint-parser')).default,
      parserOptions: {
        parser: (await import('@typescript-eslint/parser')).default,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  {
    rules: {
      // Global overrides
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
