import * as fs from 'fs';
import { join } from 'path';

// Interfaces
interface BlueMapMarkerSets { }

interface BlueMapStartPos {
  x: number;
  z: number;
}

interface BlueMapConfig {
  world: string;
  dimension: string;
  name: string;
  sorting: number;
  startPos?: BlueMapStartPos;
  skyColor: string;
  voidColor: string;
  skyLight: number;
  ambientLight: number;
  removeCavesBelowY: number;
  caveDetectionOceanFloor: number;
  caveDetectionUsesBlockLight: boolean;
  minX?: number;
  maxX?: number;
  minZ?: number;
  maxZ?: number;
  minY?: number;
  maxY?: number;
  minInhabitedTime: number;
  renderEdges: boolean;
  enablePerspectiveView: boolean;
  enableFlatView: boolean;
  enableFreeFlightView: boolean;
  enableHires: boolean;
  storage: string;
  ignoreMissingLightData: boolean;
  markerSets: BlueMapMarkerSets | Record<string, never>;
}

interface CustomBlueMapConfig extends BlueMapConfig {
  fileName: string;
}

const BASE_DIRECTORY = '/media/jotalanusse/Hard Drive/Minecraft Backup/seasons/organized';
const OUTPUT_DIRECTORY = 'config';

const BASE_CONFIG = {
  world: 'REPLACE_ME',
  name: 'REPLACE_ME',
  sorting: 0,
  skyLight: 1,
  caveDetectionOceanFloor: -5,
  caveDetectionUsesBlockLight: false,
  minInhabitedTime: 0,
  renderEdges: true,
  enablePerspectiveView: true,
  enableFlatView: true,
  enableFreeFlightView: true,
  enableHires: true,
  storage: 'file',
  ignoreMissingLightData: false,
  markerSets: {},
};

const BASE_OVERWORLD_CONFIG: BlueMapConfig = {
  ...BASE_CONFIG,
  dimension: 'minecraft:overworld',
  skyColor: '#7dabff',
  voidColor: '#000000',
  ambientLight: 0.1,
  removeCavesBelowY: -10000, // TODO: Might adjust this in the future
};

const BASE_NETHER_CONFIG: BlueMapConfig = {
  ...BASE_CONFIG,
  dimension: 'minecraft:the_nether',
  skyColor: '#290000',
  voidColor: '#150000',
  ambientLight: 0.6,
  removeCavesBelowY: -10000,
  maxY: 90,
};

const BASE_THE_END_CONFIG: BlueMapConfig = {
  ...BASE_CONFIG,
  dimension: 'minecraft:the_end',
  skyColor: '#080010',
  voidColor: '#080010',
  ambientLight: 0.6,
  removeCavesBelowY: -10000,
};

const createRenderConfigs = (configs: CustomBlueMapConfig[]) => {
  for (let i = 0; i < configs.length; i++) {
    const config = configs[i];

    const stream = fs.createWriteStream(
      join(OUTPUT_DIRECTORY, config.fileName),
    );

    const writeLine = (value: any) => {
      stream.write(`${value}\n`);
    };

    writeLine(`# ${config.name}`);
    writeLine('');
    writeLine(`world: "${config.world}"`);
    writeLine(`dimension: "${config.dimension}"`);
    writeLine(`name: "${config.name}"`);
    writeLine(`sorting: ${i}`);

    if (config.startPos) writeLine(`start-pos: {x: ${config.startPos.x}, z: ${config.startPos.z}}`);

    writeLine(`sky-color: "${config.skyColor}"`);
    writeLine(`void-color: "${config.voidColor}"`);
    writeLine(`sky-light: ${config.skyLight}`);
    writeLine(`ambient-light: ${config.ambientLight}`);
    writeLine(`remove-caves-below-y: ${config.removeCavesBelowY}`);
    writeLine(`cave-detection-ocean-floor: ${config.caveDetectionOceanFloor}`);
    writeLine(`cave-detection-uses-block-light: ${config.caveDetectionUsesBlockLight}`);

    if (config.minX) writeLine(`min-x: ${config.minX}`);
    if (config.maxX) writeLine(`max-x: ${config.maxX}`);
    if (config.minZ) writeLine(`min-z: ${config.minZ}`);
    if (config.maxZ) writeLine(`max-z: ${config.maxZ}`);
    if (config.minY) writeLine(`min-y: ${config.minY}`);
    if (config.maxY) writeLine(`max-y: ${config.maxY}`);

    writeLine(`min-inhabited-time: ${config.minInhabitedTime}`);
    writeLine(`render-edges: ${config.renderEdges}`);
    writeLine(`enable-perspective-view: ${config.enablePerspectiveView}`);
    writeLine(`enable-flat-view: ${config.enableFlatView}`);
    writeLine(`enable-free-flight-view: ${config.enableFreeFlightView}`);
    writeLine(`enable-hires: ${config.enableHires}`);
    writeLine(`storage: "${config.storage}"`);
    writeLine(`ignore-missing-light-data: ${config.ignoreMissingLightData}`);
    writeLine(`marker-sets: {}`); // TODO: Implement marker sets

    stream.end();
  }
};

const configs: CustomBlueMapConfig[] = [
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 2 - Overworld`,
    fileName: 'season-2-overworld.conf',
    world: `${BASE_DIRECTORY}/season-2/overworld`,
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 2 - Nether`,
    fileName: 'season-2-nether.conf',
    world: `${BASE_DIRECTORY}/season-2/nether`,
  },
  // {
  //   ...BASE_THE_END_CONFIG,
  //   name: `Season 2 - The End`,
  //   fileName: 'season-2-the-end.conf',
  //   world: `${BASE_DIRECTORY}/season-2/the-end`,
  // },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 3 - Overworld`,
    fileName: 'season-3-overworld.conf',
    world: `${BASE_DIRECTORY}/season-3-upgraded/overworld`,
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 3 - Nether`,
    fileName: 'season-3-nether.conf',
    world: `${BASE_DIRECTORY}/season-3-upgraded/nether`,
  },
  {
    ...BASE_THE_END_CONFIG,
    name: `Season 3 - The End`,
    fileName: 'season-3-the-end.conf',
    world: `${BASE_DIRECTORY}/season-3-upgraded/the-end`,
  },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 4 - Overworld`,
    fileName: 'season-4-overworld.conf',
    world: `${BASE_DIRECTORY}/season-4/overworld`,
    minInhabitedTime: 600, // Override this as the world was auto-generated (30s)
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 4 - Nether`,
    fileName: 'season-4-nether.conf',
    world: `${BASE_DIRECTORY}/season-4/nether`,
  },
  {
    ...BASE_THE_END_CONFIG,
    name: `Season 4 - The End`,
    fileName: 'season-4-the-end.conf',
    world: `${BASE_DIRECTORY}/season-4/the-end`,
  },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 5 - Overworld`,
    fileName: 'season-5-overworld.conf',
    world: `${BASE_DIRECTORY}/season-5/overworld`,
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 5 - Nether`,
    fileName: 'season-5-nether.conf',
    world: `${BASE_DIRECTORY}/season-5/nether`,
  },
  // {
  //   ...BASE_THE_END_CONFIG,
  //   name: `Season 5 - The End`,
  //   fileName: 'season-5-the-end.conf',
  //   world: `${BASE_DIRECTORY}/season-5/the-end`,
  // },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 6 - Overworld`,
    fileName: 'season-6-overworld.conf',
    world: `${BASE_DIRECTORY}/season-6/overworld`,
    minInhabitedTime: 1, // Override this as the world was auto-generated (0.05s)
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 6 - Nether`,
    fileName: 'season-6-nether.conf',
    world: `${BASE_DIRECTORY}/season-6/nether`,
    minInhabitedTime: 1, // Override this as the world was auto-generated (0.05s)
  },
  {
    ...BASE_THE_END_CONFIG,
    name: `Season 6 - The End`,
    fileName: 'season-6-the-end.conf',
    world: `${BASE_DIRECTORY}/season-6/the-end`,
    minInhabitedTime: 1, // Override this as the world was auto-generated (0.05s)
  },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 7 - Overworld`,
    fileName: 'season-7-overworld.conf',
    world: `${BASE_DIRECTORY}/season-7/overworld`,
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 7 - Nether`,
    fileName: 'season-7-nether.conf',
    world: `${BASE_DIRECTORY}/season-7/nether`,
  },
  {
    ...BASE_THE_END_CONFIG,
    name: `Season 7 - The End`,
    fileName: 'season-7-the-end.conf',
    world: `${BASE_DIRECTORY}/season-7/the-end`,
  },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Season 8 - Overworld`,
    fileName: 'season-8-overworld.conf',
    world: `${BASE_DIRECTORY}/season-8-updated/overworld`,
    minInhabitedTime: 1, // Override this as the world was auto-generated (0.05s)
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Season 8 - Nether`,
    fileName: 'season-8-nether.conf',
    world: `${BASE_DIRECTORY}/season-8-updated/nether`,
    minInhabitedTime: 1, // Override this as the world was auto-generated (0.05s)
  },
  {
    ...BASE_THE_END_CONFIG,
    name: `Season 8 - The End`,
    fileName: 'season-8-the-end.conf',
    world: `${BASE_DIRECTORY}/season-8-updated/the-end`,
    minInhabitedTime: 1, // Override this as the world was auto-generated (0.05s)
  },
  {
    ...BASE_OVERWORLD_CONFIG,
    name: `Mod Season 1 - Overworld`,
    fileName: 'mod-season-1-overworld.conf',
    world: `${BASE_DIRECTORY}/mod-season-1/overworld`,
  },
  {
    ...BASE_NETHER_CONFIG,
    name: `Mod Season 1 - Nether`,
    fileName: 'mod-season-1-nether.conf',
    world: `${BASE_DIRECTORY}/mod-season-1/nether`,
  },
  // {
  //   ...BASE_THE_END_CONFIG,
  //   name: `Mod Season 1 - The End`,
  //   fileName: 'mod-season-1-the-end.conf',
  //   world: `${BASE_DIRECTORY}/mod-season-1/the-end`,
  // },
];

createRenderConfigs(configs);
