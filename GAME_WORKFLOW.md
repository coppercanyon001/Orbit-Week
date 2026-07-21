# Orbit Week Workflow

## Product Goal

Build a polished browser-based weekly to-do list where every day is represented
by a distinct planet in one coherent solar system. The planets continuously
orbit a living Sun. Selecting or scrolling to a day moves the camera behind
that planet, looking inward toward the Sun with the remaining planets still
visible on their orbital paths.

## Mint Asset Rule

All visible production artwork and world content comes from Mint MCP. Three.js
may load, scale, place, light, rotate, and render the Mint-authored celestial
models. CSS and DOM own deterministic text, layout, controls, accessibility
states, and task interactions.

## Weekly Orbit Rule

- Monday through Sunday each own one focus state and one planet.
- The active day, task card, planet, camera, and orbital focus indicator must
  remain synchronized while scrolling or using the day rail.
- Hovering the far-right day rail and scrolling advances exactly one day per
  wheel gesture, clamps at Monday and Sunday, and keeps the list and planet
  camera synchronized.
- All planets continuously orbit the central Mint Sun without visible orbit
  rails, rings, guide lines, or path geometry.
- For the demo formation, all seven planets share one slowly rotating orbital
  heading while their radii step progressively farther from the Sun. A small
  parallel lateral offset prevents exact eclipses, and scrolling carries the
  camera deeper along this ordered planetary procession.
- Focus transitions zoom behind the chosen planet and look inward toward the
  Sun; the rest of the system remains visible beyond the focused planet. The
  camera follows the shortest eased orbital arc, while its target, orientation,
  and field of view interpolate continuously instead of snapping at midpoints.
- On first launch, the camera begins outside the system, completes a quick
  eased orbit around the Sun, spirals inward, and lands in Monday's established
  behind-Mercury focus. The intro must play on a normal fresh page load, finish
  in roughly three seconds, and yield immediately to day navigation. The
  explicit `?orbit-motion=reduce` URL skips the flight and quiets ambient
  motion for viewers who need a low-motion presentation.
- Monday's title card remains just offscreen during the launch orbit, then
  slides and fades into its final panel position during the Mercury landing.
  Navigation cancellation and reduced-motion mode reveal it immediately.
- The Sun uses three assembled copies of its Mint-authored mesh and PBR
  material: a dense emissive photosphere, a translucent boiling surface, and a
  compact heat shell. Independent UV drift, granular normal pressure, emission,
  rotation, opacity, and restrained nonuniform scale pulses make the complete
  sphere churn without adding separate surface objects.
- No convection patch, prominence, loop, plume, ring, or other circular mesh
  may protrude from the Sun. The Version 4 solar-activity meshes remain
  provenance-only and must not appear in the runtime map.
- The rejected gold-comet-as-fume route must not return. Its compressed tail
  geometry read as repeated gray shards rather than connected solar plasma.
- Jupiter and Neptune use dedicated Mint-authored PBR surface maps with
  recognizable atmospheric structure. Saturn is assembled from a distinct Mint
  planet body and a separate broad Mint ring system so its rings never disappear
  into the body material. Jupiter, Saturn, and Neptune remain visibly
  semi-transparent without losing their authored surface detail.
- Venus uses its dedicated Version 6 Mint PBR atmosphere maps so the focused
  sphere retains fine cream, sulfur-gold, amber, and brown cloud turbulence.
- A small lit Mint human station occasionally orbits near Earth. A separate
  Mint unidentified craft occasionally crosses the distant outer system. Their
  timed windows never overlap, and both fade cleanly at the edges of the event.
- Mint-authored meteor and comet meshes are animated and lit by Three.js far
  behind the solar system. They cross slowly and occasionally at microscopic
  visual scale and never intersect the focus camera.
- The Mint deep-space backdrop may be duplicated as a perfectly aligned
  low-opacity CSS layer so its authored stars brighten and dim subtly. No new
  stars, procedural starfield, or replacement texture may be introduced.
- Tasks can be added, completed, and deleted independently for every day.
- Weekly progress and per-day counts update immediately.
- Task state persists in local browser storage.

## Validation Rule

Verify:

- every production Mint GLB and background image exists and loads;
- scrolling, clicking, and wheel navigation on the far-right day rail keep the
  active list, planet camera, and active-day indicator synchronized;
- every planet completes an orbit without crossing the task card;
- the aligned demo formation remains ordered Mercury-through-Neptune, retains
  readable separation, and unfolds deeper into space as the days scroll;
- all seven behind-planet focus cameras keep the Sun and multiple other planets
  readable, including mobile;
- camera travel follows a smooth continuous arc at both one-day and multi-day
  jumps, with no target, orientation, or FOV snap;
- the launch orbit shows the wider Mint solar system, completes without
  clipping through a planet or the task card, and settles exactly on Mercury;
- the clean production URL plays the launch orbit, while
  `?orbit-motion=reduce` starts directly at Mercury;
- no visible orbit rail, ring, tube, guide, or path geometry remains;
- meteor and comet paths stay behind the complete solar system, carry a readable
  local light, remain microscopic, and do not intersect the camera;
- no separate circle, loop, bubble patch, plume, or prominence protrudes from
  the Sun;
- the Mint photosphere itself visibly boils through layered granular motion,
  changing normal pressure, heat-shell shimmer, and slow asymmetric swelling;
- the approved Mint star field twinkles without doubling or drifting;
- Sun and gas-planet material motion remains seamless and subtle;
- Venus remains sphere-readable at close focus, and the station and UFO remain
  small, lit, rare, separated in time, and outside the task panel;
- add, complete, and delete work by pointer and keyboard;
- local persistence restores the correct tasks;
- desktop and mobile layouts keep the Sun, planet, and controls readable;
- production build, browser console, and network requests are clean.
