
export type LoadData = {
  height: number; // in cm
  load: number; // in kg
};

export type Puntal = {
  id: string;
  model: string;
  modelSrc: string;
  dataAiHint: string;
  minHeight: number; // cm
  maxHeight: number; // cm
  tubeDiameter: string; // e.g., "48/40 mm"
  steelType: string;
  productionNorms: string;
  loadTable: LoadData[];
};

export const puntalesData: Puntal[] = [
  {
    id: "p50-100",
    model: "50/100",
    modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    dataAiHint: "construction prop",
    minHeight: 50,
    maxHeight: 100,
    tubeDiameter: "48/40 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 50, load: 3500 },
      { height: 75, load: 3200 },
      { height: 100, load: 2800 },
    ],
  },
  {
    id: "p70-120",
    model: "70/120",
    modelSrc: "https://modelviewer.dev/shared-assets/models/Horse.glb",
    dataAiHint: "steel support",
    minHeight: 70,
    maxHeight: 120,
    tubeDiameter: "56/48 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 70, load: 3600 },
      { height: 100, load: 3100 },
      { height: 120, load: 2600 },
    ],
  },
  {
    id: "p100-170",
    model: "100/170",
    modelSrc: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    dataAiHint: "adjustable prop",
    minHeight: 100,
    maxHeight: 170,
    tubeDiameter: "56/48 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 100, load: 3400 },
      { height: 150, load: 2800 },
      { height: 170, load: 2200 },
    ],
  },
  {
    id: "p160-290",
    model: "160/290",
    modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    dataAiHint: "formwork prop",
    minHeight: 160,
    maxHeight: 290,
    tubeDiameter: "56/48 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 160, load: 3000 },
      { height: 200, load: 2500 },
      { height: 250, load: 2000 },
      { height: 290, load: 1500 },
    ],
  },
  {
    id: "p180-320",
    model: "180/320",
    modelSrc: "https://modelviewer.dev/shared-assets/models/Horse.glb",
    dataAiHint: "metal support",
    minHeight: 180,
    maxHeight: 320,
    tubeDiameter: "60/56 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 180, load: 2800 },
      { height: 250, load: 2200 },
      { height: 300, load: 1700 },
      { height: 320, load: 1400 },
    ],
  },
  {
    id: "p200-360",
    model: "200/360",
    modelSrc: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    dataAiHint: "building support",
    minHeight: 200,
    maxHeight: 360,
    tubeDiameter: "60/56 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 200, load: 2500 },
      { height: 280, load: 1900 },
      { height: 320, load: 1500 },
      { height: 360, load: 1200 },
    ],
  },
  {
    id: "p220-400",
    model: "220/400",
    modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    dataAiHint: "shoring prop",
    minHeight: 220,
    maxHeight: 400,
    tubeDiameter: "76/60 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 220, load: 2200 },
      { height: 300, load: 1600 },
      { height: 350, load: 1300 },
      { height: 400, load: 1000 },
    ],
  },
];
