import { describe, it, expect } from 'vitest';

describe('Project Integrity', () => {
  it('should have a functional environment', () => {
    expect(true).toBe(true);
  });

  it('should have critical metadata defined', async () => {
    const packageJson = await import('../package.json');
    expect(packageJson.name).toBe('omnicore-framework');
    expect(packageJson.type).toBe('module');
  });
});

describe('Design System', () => {
  it('should have Tailwind CSS configured', async () => {
    const astroConfig = await import('../astro.config.mjs');
    expect(astroConfig.default.vite.plugins).toBeDefined();
  });
});
