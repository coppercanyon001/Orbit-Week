export const ORBIT_WEEK_MINT_ASSETS = {
  background: "/images/orbit-week/deep-space.png",
  sun: "/models/orbit-week-v2/sun.glb",
  saturnRings: "/models/orbit-week-v3/saturn-rings.glb",
  planets: {
    mercury: "/models/orbit-week-v2/mercury.glb",
    venus: "/models/orbit-week-v2/venus.glb",
    earth: "/models/orbit-week-v2/earth.glb",
    mars: "/models/orbit-week-v2/mars.glb",
    jupiter: "/models/orbit-week-v3/jupiter-smooth.glb",
    saturn: "/models/orbit-week-v3/saturn-body.glb",
    neptune: "/models/orbit-week-v2/neptune.glb",
  },
  materials: {
    sun: {
      baseColor: "/materials/orbit-week-v3/sun/basecolor.png",
      normal: "/materials/orbit-week-v3/sun/normal.png",
      roughness: "/materials/orbit-week-v3/sun/roughness.png",
    },
    jupiter: {
      baseColor: "/materials/orbit-week-v3/jupiter/basecolor.png",
      normal: "/materials/orbit-week-v3/jupiter/normal.png",
      roughness: "/materials/orbit-week-v3/jupiter/roughness.png",
    },
    neptune: {
      baseColor: "/materials/orbit-week-v3/neptune/basecolor.png",
      normal: "/materials/orbit-week-v3/neptune/normal.png",
      roughness: "/materials/orbit-week-v3/neptune/roughness.png",
    },
  },
  flybys: {
    cometBlue: "/models/orbit-week-v2/comet-blue.glb",
    cometGold: "/models/orbit-week-v2/comet-gold.glb",
    meteorEmber: "/models/orbit-week-v2/meteor-ember.glb",
    meteorCold: "/models/orbit-week-v2/meteor-cold.glb",
  },
} as const;

export type OrbitPlanet = keyof typeof ORBIT_WEEK_MINT_ASSETS.planets;
