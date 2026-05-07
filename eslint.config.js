import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rules here
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // customize your rules here
    }
  }
];
