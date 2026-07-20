# Orbit Week

A Mint-authored 3D weekly to-do list where every day is a planet. Scroll from
Monday to Sunday, add missions for each day, and keep the week in orbit while
the Sun remains anchored at the left edge.

## Experience

- Seven full-screen, scroll-snap day stations from Mercury to Neptune.
- A fixed 3D Sun and a smoothly transitioning Mint planet for every day.
- Add, complete, and delete missions independently for each day.
- Weekly and per-day progress that updates immediately.
- Local browser persistence across reloads.
- Keyboard-accessible controls and responsive desktop/mobile layouts.

## Mint Asset Policy

All visible production artwork comes from Mint: eight celestial GLBs and the
deep-space background. Three.js only loads, normalizes, lights, positions,
rotates, and renders those assets. CSS and DOM own deterministic text, layout,
controls, focus states, and task behavior.

See [MINT_ASSET_MANIFEST.md](./MINT_ASSET_MANIFEST.md) for the asset contract,
provenance, recovery history, and runtime paths. See
[GAME_WORKFLOW.md](./GAME_WORKFLOW.md) for the product rules.

## Local Development

Requires Node.js `>=22.13.0`.

```bash
pnpm install
pnpm dev
```

Build and test:

```bash
pnpm build
pnpm test
```

## Project Structure

```text
app/OrbitWeek.tsx                  Task UI, scroll state, and Three.js scene
app/orbitWeekMintAssets.ts         Authoritative Mint runtime map
public/models/orbit-week/          Eight validated Mint celestial GLBs
public/images/orbit-week/          Mint deep-space background
MINT_ASSET_MANIFEST.md             Asset contract, provenance, and validation
```

## License

The code is licensed under MIT. Generated assets may have separate rights under
their Mint generation terms; verify those terms before redistributing them.
