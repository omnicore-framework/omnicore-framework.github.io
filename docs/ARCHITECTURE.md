# OmniCore Framework - Project Architecture

## Project Type

**Frontend Infrastructure & Operations Portal**
This repository hosts the primary web interface for the OmniCore Framework ecosystem, focusing on high-end visualization of AI infrastructure, telemetry, and cybersecurity operations.

## Directory Structure

### `src/`

The core application source code.

- `components/`: Modular UI components.
  - `layout/`: Global elements like Header and Footer.
  - `sections/`: High-level page sections (Hero, Terminal, Telemetry, Ecosystem).
  - `visuals/`: Complex visual components (3D Objects, Neural Backgrounds).
  - `ui/`: Common/shared UI elements (Dividers, Buttons, etc.).
- `layouts/`: Base page templates.
- `pages/`: Application routing and entry points.
- `styles/`: Global CSS and design system tokens.
- `content/`: Managed content collections (markdown/data).

### `docs/`

Technical documentation, design specs, and architectural diagrams.

### `tests/`

Testing suite including unit tests and end-to-end (Playwright/Cypress) verification.

### `archive/`

Legacy files and code snippets preserved for reference but not active in the current build.

### `public/`

Static assets served directly (logos, fonts, etc.).

## Tech Stack

- **Framework:** Astro 6.x
- **Styling:** Tailwind CSS 4.x
- **3D/Visuals:** Three.js & SVG Animations
- **Language:** TypeScript
