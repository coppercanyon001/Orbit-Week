# Orbit Week — Mint Asset Manifest

Date: 2026-07-19  
Project: A planet-per-day weekly to-do list inside a living orbital solar system.

## Production Boundary

Every visible production asset and all space-world content comes from Mint MCP.
Three.js only loads, scales, positions, lights, rotates, and renders those
assets. CSS and DOM provide deterministic labels, task controls, progress,
focus states, and accessible interaction.

## Version 7 Launch-Orbit Contract

- The launch sequence introduces no new visible asset. Three.js moves the
  camera around the existing approved Mint solar system and lands on Mercury.
- The seven approved Mint planets travel in one parallel depth formation with
  progressively larger solar radii. Three.js preserves their order and moves
  the focus camera down the lineup as the weekly lists scroll.
- The camera begins in a wide system view, completes a little more than one
  eased revolution, spirals inward, narrows its field of view, and settles on
  the exact Monday focus camera in roughly three seconds.
- User navigation cancels the intro cleanly. The normal production URL always
  plays the opening, while the explicit `?orbit-motion=reduce` URL starts at
  the final Mercury view and quiets ambient motion.
- The deterministic DOM Monday card stays offscreen during flight and slides
  into place as the camera enters its final Mercury approach. It introduces no
  new visual asset and appears instantly when the orbit is skipped.

## Version 6 Living-Orbit Contract

- Camera travel follows a continuous eased orbital arc between adjacent focus
  planets. Position, look target, orientation, and field of view must settle
  together without a midpoint snap.
- Venus uses a dedicated seamless Mint PBR atmosphere map set with realistic
  cream, pale sulfur-gold, amber, and muted brown cloud bands. It must not read
  as lava, polished plastic, broad blurry stains, candy color, or a low-detail
  cartoon sphere.
- Solar fume and boiling use a dedicated seamless Mint PBR map set applied to
  three continuous copies of the accepted Mint Sun sphere: dense photosphere,
  drifting boil layer, and compact heat-vapor shell. No separate solar-effect
  geometry may remain. Three.js may rotate, breathe, fade, and light these
  Mint-authored surfaces.
- A human orbital research station may appear near Earth occasionally. It must
  be one isolated Mint model with a central truss, pressurized modules, docking
  hardware, and paired blue-black solar arrays; no logos, flags, text, people,
  planets, stars, stands, or background geometry. Local `+X` is the long-axis
  travel direction.
- A restrained unidentified spacecraft may cross the outer solar system
  occasionally. It must be one isolated Mint model with a believable metallic
  hull and authored cool-white/cyan running lights; no alien character, text,
  logo, beam, planet, stars, stand, or background geometry. Local `+X` is the
  travel direction.
- The station and UFO remain rare secondary events, never overlap the task
  card, never intersect the focus camera, and never appear simultaneously.

| Semantic asset        | Ownership             | Acceptance criteria                                                                                              | Runtime path                                            | Status                    |
| --------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------- |
| Venus atmosphere maps | Tuesday planet        | Seamless realistic sulfuric cloud bands with fine turbulence and sphere-readable contrast                        | `public/materials/orbit-week-v6/venus/`                 | Accepted after browser QA |
| Solar boiling maps    | Photosphere and vapor | Seamless fine convection cells, dark filament channels, bright granular ridges, and no broad flat orange regions | `public/materials/orbit-week-v6/sun/`                   | Accepted after browser QA |
| Solar corona mantle   | Rejected provenance   | Runtime produced translucent perimeter patches resembling attached circles                                       | `public/models/orbit-week-v6/solar-corona-mantle.glb`   | Rejected after browser QA |
| Orbital station       | Rare Earth companion  | Realistic modular human research station with solar arrays, isolated and centered                                | `public/models/orbit-week-v6/human-orbital-station.glb` | Accepted after browser QA |
| Outer-system UFO      | Rare distant flyby    | Realistic mysterious craft with authored restrained running lights, isolated and centered                        | `public/models/orbit-week-v6/outer-system-ufo.glb`      | Accepted after browser QA |

## Version 5 Boiling-Sun Contract

- Remove every separate solar-activity mesh from production. No circle, loop,
  arch, bubble field, plume, or prominence may sit on or outside the Sun.
- The only visible Sun owner is the accepted Mint Sun mesh plus the accepted
  Version 3 Sun PBR map set.
- Assemble three copies: an opaque photosphere, a translucent boiling surface,
  and a compact translucent heat shell. Three.js may animate UV offsets,
  rotation, normal strength, emission, opacity, light output, and restrained
  nonuniform scale.
- The combined motion must read as internal convection and pressure: granular
  cells drift against one another, hot regions brighten and recede, and the
  complete silhouette swells asymmetrically by only a few percent.
- Forbidden: separate blobs, circles, rings, arches, spikes, particles, smoke,
  shader noise, code-generated displacement, or geometry that detaches from the
  photosphere.

## Version 4 Solar-Activity Contract

- The previous gold-comet plume reuse is rejected after runtime review. Its
  compressed tail geometry produced repeated jagged gray shards and did not
  resemble natural solar plasma.
- Solar activity must use a dedicated Mint-authored family with two distinct
  forms:
  - a low-profile field of connected, rounded convection blisters that can sit
    partially beneath the photosphere;
  - a broad, smooth magnetic prominence ribbon with a curling arch silhouette,
    tapered organic edges, and a clearly rooted base.
- Both assets use bright yellow-white, amber, orange, and restrained deep-red
  solar material detail. They must not contain gray smoke, hard triangular
  spikes, a comet nucleus or tail, particles, detached chunks, a stand, text,
  stars, or background geometry.
- Local `+Y` points away from the solar surface. Each asset is centered and
  normalized independently with continuous, smooth topology.
- Three.js may place multiple copies around the Mint Sun, partially submerge
  bubble fields, and animate slow swelling, curling, subtle rotation, emission,
  and fade. It may not procedurally draw plasma, particles, smoke, or noise.

| Semantic asset          | Ownership                  | Acceptance criteria                                                                                                                | Runtime path                                               | Status                               |
| ----------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| Solar convection field  | Superseded provenance only | Connected rounded plasma blisters with irregular scale, shallow rooted base, no discrete bead row, spikes, smoke, or detached form | `public/models/orbit-week-v4/solar-convection-bubbles.glb` | Removed from runtime at user request |
| Solar prominence ribbon | Superseded provenance only | Broad smooth curling magnetic-plasma arch with rooted ends, tapered organic contour, no nucleus, tail, flame cone, or debris       | `public/models/orbit-week-v4/solar-prominence-plume.glb`   | Removed from runtime at user request |

## Version 3 Visual Contract

- Title: **Orbit Week**
- Mood: premium cinematic observatory, physically plausible celestial scale,
  calm deep space, and high-contrast mission-control typography.
- Materials: near-photoreal PBR surfaces with fine crater detail, layered
  clouds, storm bands, polar caps, atmospheric color variation, and a dense
  turbulent solar photosphere. No soft facets or toy-like smoothing.
- Palette: physically plausible solar-system colors with restrained contrast;
  no candy saturation, pastel plastic, cartoon faces, or collectible-toy look.
- Forms: clean isolated full planetary silhouettes; each centered at origin;
  no text, stands, bases, stars, logos, people, spacecraft, or extra moons.
- Camera target: readable both from solar-system overview and a close
  behind-planet camera looking inward toward the Sun. Surface detail must
  survive the close focus without obvious low-resolution blur.
- Runtime orientation: `+Y` up; comet and meteor semantic travel axis is local
  `+X`; models normalized once from measured bounds.
- Living-surface policy: Three.js may animate offsets, rotation, and material
  parameters only on the approved Mint-authored maps. No procedural noise,
  replacement shaders, runtime recoloring, or code-generated displacement.
- Transparency policy: Jupiter, Saturn, Neptune, and Saturn's rings may use
  restrained runtime opacity while preserving their approved Mint maps.
- Solar-fume policy: superseded by the Version 4 dedicated solar-activity
  contract above. Comet assets may not be reused on the Sun.
- Star policy: CSS may pulse a perfectly aligned duplicate of the approved Mint
  backdrop to brighten its existing stars; it may not draw new stars.
- Forbidden: visible orbit-path geometry, procedural substitute planets,
  code-drawn stars, generated text, copied NASA imagery, visible debug geometry,
  and any planet with toy proportions or broad sculpted craters.

## Version 3 Replacement Contract

| Semantic asset              | Ownership                     | Acceptance criteria                                                                                                                         | Runtime path                                   | Status                                 |
| --------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| Sun photosphere material    | Sun base and convection shell | Seamless fine convection cells, bright yellow-white and amber turbulence, restrained sunspots, PBR base color/normal/roughness maps         | `public/materials/orbit-week-v3/sun/`          | Accepted                               |
| Jupiter atmosphere material | Friday planet                 | Recognizable cream, tan, rust, and brown bands with small turbulent eddies and a believable Great Red Spot; no broad polygon blocks         | `public/materials/orbit-week-v3/jupiter/`      | Accepted after spherical UV correction |
| Neptune atmosphere material | Sunday planet                 | Deep cobalt methane atmosphere with subtle cyan bands, wispy high clouds, and a faint dark storm; no plastic gloss                          | `public/materials/orbit-week-v3/neptune/`      | Accepted after spherical UV correction |
| Saturn body                 | Saturday planet               | Smooth pale-gold sphere with restrained horizontal atmosphere bands and no attached ring geometry                                           | `public/models/orbit-week-v3/saturn-body.glb`  | Accepted                               |
| Saturn ring system          | Saturday ring owner           | Broad thin concentric cream/gray/ochre ring disc with transparent gaps and a clean central opening; no sphere, stand, shards, or orbit path | `public/models/orbit-week-v3/saturn-rings.glb` | Accepted                               |

## Production Families

### Realistic Celestial Objects

Expected format: eight static PBR-textured GLBs with nonzero bounds, one
isolated celestial object per file, centered pivot, and no baked animation.

| Semantic asset | Day / ownership | Acceptance criteria                                                                           | Runtime path                                                                                   | Status   |
| -------------- | --------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| Sun            | System center   | Dense realistic photosphere, turbulent granular detail, compact corona authored into material | `public/models/orbit-week-v2/sun.glb` + `public/materials/orbit-week-v6/sun/`                  | Accepted |
| Mercury        | Monday          | Dark gray rocky body with fine, varied impact basins rather than oversized toy craters        | `public/models/orbit-week-v2/mercury.glb`                                                      | Accepted |
| Venus          | Tuesday         | Muted cream and sulfur-gold opaque atmospheric cloud layers                                   | `public/models/orbit-week-v2/venus.glb` + `public/materials/orbit-week-v6/venus/`              | Accepted |
| Earth          | Wednesday       | Deep blue ocean, natural land color, polar ice, thin convincing cloud systems                 | `public/models/orbit-week-v2/earth.glb`                                                        | Accepted |
| Mars           | Thursday        | Rust-red deserts, darker basalt regions, canyons, fine craters, polar ice                     | `public/models/orbit-week-v2/mars.glb`                                                         | Accepted |
| Jupiter        | Friday          | Dense realistic beige/brown bands, small-scale turbulence, Great Red Spot                     | `public/models/orbit-week-v3/jupiter-smooth.glb` + `public/materials/orbit-week-v3/jupiter/`   | Accepted |
| Saturn         | Saturday        | Pale cream gas bands and thin physically plausible ring system with visible band gaps         | `public/models/orbit-week-v3/saturn-body.glb` + `public/models/orbit-week-v3/saturn-rings.glb` | Accepted |
| Neptune        | Sunday          | Deep cobalt atmosphere, subtle white methane clouds and storm bands                           | `public/models/orbit-week-v2/neptune.glb` + `public/materials/orbit-week-v3/neptune/`          | Accepted |

### Orbital Architecture — Removed

| Semantic asset           | Ownership                  | Acceptance criteria                                    | Runtime path                                  | Status                               |
| ------------------------ | -------------------------- | ------------------------------------------------------ | --------------------------------------------- | ------------------------------------ |
| Seven-ring orbit lattice | Superseded provenance only | Must not appear in the runtime map or production scene | `public/models/orbit-week-v2/orbit-rings.glb` | Removed from runtime at user request |

### Moving Background Objects

Expected format: four static textured GLBs with authored tails where applicable,
centered pivot, local `+X` travel direction, no animation.

| Semantic asset  | Acceptance criteria                                                          | Runtime path                                   | Status                                  |
| --------------- | ---------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------- |
| Blue ice comet  | Small realistic nucleus with long restrained cyan-white dust and ion tail    | `public/models/orbit-week-v2/comet-blue.glb`   | Accepted after structural tail revision |
| Gold dust comet | Dark nucleus with warm-white dust tail, different silhouette                 | `public/models/orbit-week-v2/comet-gold.glb`   | Accepted                                |
| Ember meteor    | Irregular iron-rich rock with compact orange plasma wake authored into asset | `public/models/orbit-week-v2/meteor-ember.glb` | Accepted                                |
| Cold meteor     | Dark stone meteor with faint pale-blue wake and chipped silhouette           | `public/models/orbit-week-v2/meteor-cold.glb`  | Accepted                                |

### Space Backdrop

Expected format: wide landscape PNG or JPG, no alpha required.

| Semantic asset        | Ownership           | Acceptance criteria                                                              | Runtime path                              | Status   |
| --------------------- | ------------------- | -------------------------------------------------------------------------------- | ----------------------------------------- | -------- |
| Deep-space star field | Fixed site backdrop | Sparse tiny stars, faint blue-violet nebula haze, dark edges, no planets or text | `public/images/orbit-week/deep-space.png` | Accepted |

The former gold-dust-comet fume reuse is retained only as rejected provenance.
It is not approved for runtime Sun activity.

## Version 3 Structural Validation Contract

- Every GLB must have a valid GLB header, nonzero accessor bounds, at least one
  mesh and material, and parse through Three.js GLTFLoader.
- Every planet must be a discrete authored Mint mesh. Runtime material
  replacement is limited to the approved Mint-authored Sun, Venus, Jupiter,
  and Neptune map sets above.
- Saturn's body and ring system remain separate Mint artifacts assembled under
  one planet root; the ring must remain legible at the smallest production
  viewport and never become an edge-on flickering line.
- No orbit lattice, Curve, Line, TubeGeometry, torus, canvas, SVG, or other
  visible path substitute may appear in production.
- Comet and meteor tails must be authored inside their Mint artifacts and read
  from the production camera without a runtime particle substitute.
- The Sun must use three assembled copies of its Mint mesh/material and remain
  readable from every behind-planet focus view. No Version 4 solar-activity
  model or other separate effect mesh may surround it.
- The backdrop must have valid dimensions, readable low-frequency contrast,
  and no generated text or embedded celestial hero objects.
- No pending, partial, rejected, or superseded artifact may appear in the
  runtime map.

## Runtime Map

The authoritative semantic-to-local path map lives in
`app/orbitWeekMintAssets.ts`.

## Version 1 Superseded Assets

The original softly faceted celestial family remains recorded below for
provenance but will be removed from the runtime map once the complete realistic
version 2 family passes browser QA. The version 1 background remains eligible
because it already matches the darker realistic direction.

## Generation Log

| Family                                         | Mint source                                                        | Decision                                                                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Detailed realistic celestial family            | [Mint chat](https://mint.gg/chat/ph790pmmnq94vgew18cxtba15x8av0tp) | Mercury, Mars, and Jupiter accepted after close-focus runtime comparison                                        |
| Smooth watertight celestial correction         | [Mint chat](https://mint.gg/chat/ph71zfgv0r47ar0bvdv4h9jehd8avzb0) | Sun, Venus, Earth, Saturn, and Neptune accepted; smooth silhouettes replaced faceted candidates                 |
| Seven-ring orbit lattice                       | [Mint chat](https://mint.gg/chat/ph765fr03f9qgn514tbsdbg95h8avcdk) | Superseded and removed from runtime at user request                                                             |
| Living Sun, Jupiter, and Neptune PBR materials | [Mint chat](https://mint.gg/chat/ph77ads2yedhgw5yp73ccbwrb98aw019) | All three 1024 × 1024 base-color, normal, and roughness sets accepted after close-focus browser QA              |
| Natural solar-activity family                  | [Mint chat](https://mint.gg/chat/ph7575g906a5ft0ejfqdxv257s8ax8mw) | Structurally valid, then superseded because the separate forms read as circles attached to the Sun              |
| Saturn body and broad ring system              | [Mint chat](https://mint.gg/chat/ph73h8kzg7f91jjhtzbqh00dyx8aw3fr) | Separate body and ring GLBs accepted after authored-UV, ring-lighting, and focus-framing QA                     |
| Comet and meteor flyby family                  | [Mint chat](https://mint.gg/chat/ph71wxt68869wqzant3mvtrrs98atqnr) | Gold comet and both meteors accepted; blue comet accepted after removing a duplicate nucleus and crossing plume |
| Eight-object celestial pack                    | [Mint chat](https://mint.gg/chat/ph7ds1zzm8z3qf8jrcwbwkkwp18atzg7) | Sun through Jupiter accepted; Saturn and Neptune final conversion failed and were superseded                    |
| Saturn recovery                                | [Mint chat](https://mint.gg/chat/ph746c4mgettahm5a1qec1k9qd8atz5q) | Regenerated from the approved family preview and accepted                                                       |
| Neptune recovery                               | [Mint chat](https://mint.gg/chat/ph71ax8m7q5nxf5k07ec8dsdpd8atahm) | Regenerated from the approved family preview and accepted                                                       |
| Deep-space background                          | [Mint chat](https://mint.gg/chat/ph7b9771ccmwaaqszr3y2qyq6d8avwyv) | Accepted after downloaded PNG inspection                                                                        |
| Version 6 Venus atmosphere material            | [Mint chat](https://mint.gg/chat/ph790pjcb6byry3yr7de04nq7d8az24k) | Three 1024 × 1024 PBR maps accepted after close-focus browser QA                                                |
| Version 6 station, UFO, and rejected corona    | [Mint chat](https://mint.gg/chat/ph78tvh10ychd3g89zcabzy80h8ay077) | Station and UFO accepted; corona rejected because its translucent patches read as attached circles              |
| Version 6 continuous boiling-Sun material      | [Mint chat](https://mint.gg/chat/ph7b889k87wh49ztfqfjd1z7j58azxr4) | Three 1024 × 1024 PBR maps accepted on three continuous copies of the existing Mint Sun sphere                  |

The runtime deliberately uses the strongest close-focus result per planet
rather than forcing every body to come from one batch. The detailed family won
for Mercury, Mars, and Jupiter; the stricter watertight correction won for the
Sun, Venus, Earth, Saturn, and Neptune. The earlier version 1 family remains
provenance-only and does not appear in the runtime map.

## Completed Structural Validation

- All thirteen version 2 model files have valid GLB headers and declared byte
  lengths.
- Every GLB has one scene, one node, one mesh, one material, three embedded
  textures, zero animations, and nonzero accessor bounds.
- The spherical bodies measure approximately `0.998 × 0.998 × 0.998` before
  runtime normalization; Saturn measures `0.998 × 0.494 × 0.998`, including its
  authored ring.
- Version 2 GLBs range from 378,224 to 1,260,076 bytes.
- Version 3 adds a 435,800-byte smooth Jupiter mesh, a 359,348-byte Saturn
  body, an 804,844-byte ring system, and nine 1024 × 1024 PNG material maps.
- Version 4 adds a 545,920-byte convection-field GLB and a 685,300-byte
  prominence GLB. Both contain one smooth mesh, one material, three embedded
  2048 × 2048 PBR textures, no animation, and nonzero normalized bounds.
- Version 6 adds two 1024 × 1024 PBR map sets, a 1,224,824-byte human station,
  and a 1,002,068-byte outer-system craft. Both accepted GLBs have one scene,
  node, mesh, and material, three embedded textures, no animation, and nonzero
  bounds. The rejected 1,589,008-byte corona GLB remains provenance-only.
- The Saturn body measures approximately `0.998 × 0.998 × 0.998`; its separate
  ring system measures `0.998 × 0.002 × 0.998` before runtime normalization.
- The background is a valid 1,376 × 768 RGB PNG at 1,079,855 bytes.
- Every runtime path in `app/orbitWeekMintAssets.ts` exists locally.
- Live camera QA kept Saturn at a readable ring angle and confirmed that the
  flyby layer stays behind the planets and task panel.

## Completed Runtime Validation

- Production build and rendered-page tests pass.
- Desktop browser QA covered all seven focused camera views, continuous
  planetary motion, the full Sun-behind-planet composition, the absence of
  visible orbit paths, lit comets, add, complete, delete, and weekly progress.
- The current effects pass confirms semi-transparent Jupiter, Saturn, Saturn
  rings, and Neptune; a three-layer boiling Mint photosphere with no attached
  circles; microscopic distant flybys; and an aligned twinkling duplicate of
  the Mint star field.
- Version 6 browser QA confirms continuous eased camera arcs, the revised
  close-focus Venus atmosphere, the station's lit Earth-relative orbit, and the
  non-overlapping distant UFO window. The rejected corona is absent from the
  runtime map; the Sun uses only continuous sphere layers.
- Boiling-Sun QA compared elapsed Monday close-focus frames, the Friday/Jupiter
  view, and the 390 × 844 mobile composition. The surface granulation changes,
  the silhouette swells asymmetrically, and no Version 4 mesh loads.
- Mobile QA at 390 × 844 confirmed readable Sun and planet framing, a complete
  task card, Saturn ring readability, and no horizontal overflow.
- Browser QA reports no application errors or missing production assets.

## Rejected Runtime Routes

- **Gold comet reused as solar fume (2026-07-19):** rejected after user review.
  Five compressed low-opacity copies looked like repeated gray shards above the
  Sun. The route must be removed rather than retuned.
- **Version 4 convection and prominence meshes (2026-07-19):** removed from the
  runtime after user review because their rounded patches and arch silhouettes
  read as circles attached to the Sun. The files remain provenance-only.
- **Version 6 corona mantle (2026-07-20):** rejected during browser QA because
  translucent perimeter patches recreated the attached-circle problem. The
  runtime instead uses the dedicated Version 6 boiling maps on three continuous
  copies of the accepted Mint Sun sphere.
