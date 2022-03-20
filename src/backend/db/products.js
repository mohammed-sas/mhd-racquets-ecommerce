import { v4 as uuid } from "uuid";
import nf555 from "../../assets/products/nf-555.webp";
import nf001 from "../../assets/products/nf-001.webp";
import nf700 from "../../assets/products/nf-700.webp";
import astrox100 from "../../assets/products/astrox100zz.webp";
import astrox99 from "../../assets/products/ax99.webp";
import astrox3dg from "../../assets/products/astrox_3dg.webp";
import arc11 from "../../assets/products/arc11.webp";
import voltric from "../../assets/products/voltric-lite.webp";
import aerosensa50 from "../../assets/products/aerosensa_50.webp";
import aeroclub33 from "../../assets/products/aeroclub_33.webp";
import mavis2000 from "../../assets/products/mavis2000w.webp";
import mavis350 from "../../assets/products/mavis350.webp";
import aerobiteBoost from "../../assets/products/aerobite_boost.webp";
import aerobite from "../../assets/products/aerobite.webp";
import bg80 from "../../assets/products/bg80.webp"
import pc65 from "../../assets/products/power-65x.webp";
import pc37 from "../../assets/products/pc-37.webp";
import eclipsion from "../../assets/products/eclipsion.webp";
import pcAero from "../../assets/products/power-cushion-aero.webp";
import skyark from "../../assets/products/skyark.webp";

/**

* Product Database can be added here.

* You can add products of your wish with different attributes

* */

export const products = [
  {
    _id: uuid(),
    title: "Nanoflare 555",
    brand: "Yonex",
    price: "5699",
    rating: 3,
    image: nf555,
    description: [
      {
        title: "Frame",
        info: "HM Graphite / Nanocell NEO / EX-HMG / Solid Titanium",
      },
      { title: "Shaft Composition", info: "HM Graphite" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      { title: "Weight / Grip", info: "4U (Avg. 83g) G4, 5" },
    ],
    categoryName: "Racquet",
  },

  {
    _id: uuid(),
    title: "Nanoflare 001",
    brand: "Yonex",

    price: "2190",

    rating: 4,

    image: nf001,

    description: [
      { title: "Frame", info: "Graphite" },
      { title: "Shaft Composition", info: "Graphite" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      { title: "Weight / Grip", info: "5U (Avg. 78g) G4, 5" },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Nanoflare 700",

    brand: "Yonex",

    price: "11,599",

    image: nf700,

    rating: 5,

    description: [
      {
        title: "Frame",
        info: "HM Graphite / Nanocell NEO / EX-HMG / Solid Titanium",
      },
      { title: "Shaft Composition", info: "HM Graphite" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      { title: "Weight / Grip", info: "4U (Avg. 83g) G4, 5" },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Astrox 100zz",

    brand: "Yonex",

    price: "13,250",

    image: astrox100,

    rating: 4,

    description: [
      {
        title: "Frame",
        info: "HM Graphite / Namd / Tungsten / Black Micro Core / Nanometric",
      },
      { title: "Shaft Composition", info: "HM Graphite / Namd" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      {
        title: "Weight / Grip",
        info: "4U (Avg.83g) G5, 6 / 3U (Avg.88g) G4, 5, 6",
      },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Astrox 99 pro",

    brand: "Yonex",

    price: "10,199",

    image: astrox99,

    rating: 3,

    description: [
      {
        title: "Frame",
        info: "HM Graphite / Namd / VOLUME CUT RESIN / Tungsten",
      },
      { title: "Shaft Composition", info: "HM Graphite / Namd" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      {
        title: "Weight / Grip",
        info: "4U (Avg.83g) G5, 6 / 3U (Avg.88g) G4, 5, 6",
      },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Astrox 3 DG",

    brand: "Yonex",

    price: "4,199",

    image: astrox3dg,

    rating: 3,

    description: [
      { title: "Frame", info: "HM Graphite / Tungsten" },
      { title: "Shaft Composition", info: "HM Graphite / NANOMESH NEO" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      { title: "Weight / Grip", info: "4U (Avg. 83g) G4, 5" },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Arcsaber 11",

    brand: "Yonex",

    price: "8,889",

    image: arc11,

    rating: 5,

    description: [
      { title: "Frame", info: "HM Graphite / POCKETING BOOSTER" },
      { title: "Shaft Composition", info: "HM Graphite / SUPER HMG" },
      { title: "Joint", info: "Built-in T-Joint / T-ANCHOR" },
      { title: "Length", info: "10 mm longer" },
      {
        title: "Weight / Grip",
        info: "4U (Avg. 83g) G5, 63U (Avg. 88g) G4, 5, 6",
      },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Voltric lite",

    brand: "Yonex",

    price: "1,999",

    image: voltric,

    rating: 2,

    description: [
      { title: "Frame", info: "Graphite / Tungsten" },
      { title: "Shaft Composition", info: "Graphite" },
      { title: "Joint", info: "Built-in T-Joint" },
      { title: "Length", info: "10 mm longer" },
      { title: "Weight / Grip", info: "4U (Avg. 83g) G4, 5" },
    ],

    categoryName: "Racquet",
  },

  {
    _id: uuid(),

    title: "Aerosensa 50",

    brand: "Yonex",

    price: "3,730",

    image: aerosensa50,

    rating: 5,

    categoryName: "ShuttleCock",

    description: [
      { title: "Material", info: "100% solid cork, goose feather" },
      { title: "Quantity", info: "1 tube / 12 shuttlecocks" },
    ],
  },

  {
    _id: uuid(),

    title: "Aeroclub 33",

    brand: "Yonex",

    price: "1,250",

    image: aeroclub33,

    rating: 3,

    categoryName: "ShuttleCock",

    description: [
      { title: "Material", info: "100% solid cork, goose feather" },
      { title: "Quantity", info: "1 tube / 12 shuttlecocks" },
    ],
  },

  {
    _id: uuid(),

    title: "Mavis 2000",

    brand: "Yonex",

    price: "2,599",

    rating: 4,

    image: mavis2000,

    categoryName: "ShuttleCock",

    description: [
      { title: "Material", info: "100% solid cork, goose feather" },
      { title: "Quantity", info: "1 tube / 6 shuttlecocks" },
    ],
  },

  {
    _id: uuid(),

    title: "Mavis 350",

    brand: "Yonex",

    price: "999",

    rating: 4,

    image: mavis350,

    categoryName: "ShuttleCock",

    description: [
      { title: "Material", info: "100% solid cork, plastic feather" },
      { title: "Quantity", info: "1 tube / 6 shuttlecocks" },
    ],
  },

  {
    _id: uuid(),

    title: "Aerobite Boost",

    brand: "Yonex",

    price: "975",

    rating: 3,

    image: aerobiteBoost,

    categoryName: "String",

    description: [
      { title: "Gauge", info: "mains - 0.72 mm; crosses - 0.61 mm" },
      {
        title: "Length",
        info: "mains - 5.5 m (18 ft) / crosses - 5 m (16 ft)",
      },
      {
        title: "Core",
        info: "High-Intensity Nylon Multifilament, Super Fiber: Vectran™ (mains only)",
      },
      {
        title: "Outer",
        info: "High Polymer Braided Nylon Fiber, Oval-Shaped (mains only)",
      },
    ],
  },

  {
    _id: uuid(),

    title: "Aerobite Boost",

    brand: "Yonex",

    price: "780",

    rating: 2,

    image: aerobite,

    categoryName: "String",

    description: [
      { title: "Gauge", info: "mains - 0.67 mm; crosses - 0.61 mm" },
      {
        title: "Length",
        info: "mains - 5.5 m (18 ft) / crosses - 5 m (16 ft); mains - 105 m (344 ft) / crosses - 95 m (311 ft)",
      },
      { title: "Core", info: "High-Intensity Nylon Multifilament" },
      { title: "Outer", info: "High Polymer Braided Nylon Fiber" },
    ],
  },

  {
    _id: uuid(),

    title: "BG80 Power",

    brand: "Yonex",

    price: "555",

    image: bg80,

    rating: 4,

    categoryName: "String",

    description: [
      { title: "Gauge", info: "0.68 mm" },
      { title: "Length", info: "10 m (33 ft) / 200 m (656 ft)" },
      {
        title: "Core",
        info: "High-Intensity Nylon Multifilament, Super Fiber: Vectran™ (mains only)",
      },
      { title: "Outer", info: "Special Braided High Polymer Nylon Fiber" },
    ],
  },

  {
    _id: uuid(),

    title: "Skyark",

    brand: "Yonex",

    price: "950",

    image: skyark,

    rating: 5,

    categoryName: "String",

    description: [
      { title: "Gauge", info: "0.69 mm" },
      { title: "Length", info: "10 m (33 ft)" },
      {
        title: "Core",
        info: "High-Intensity Nylon Multifilament, Hi-sling Fiber",
      },
      {
        title: "Outer",
        info: "High Polymer Braided Nylon Fiber, Oval-Shaped (mains only)",
      },
    ],
  },

  {
    _id: uuid(),

    title: "Power Cushion 65",

    brand: "Yonex",

    price: "10,999",

    image: pc65,

    rating: 5,

    categoryName: "Shoe",

    description: [
      {
        title: "Material",
        info: "POWER CUSHION+, POWER CUSHION, Double Raschel Mesh, Durable Skin Light, Feather Bounce Foam",
      },
      { title: "Upper", info: "Synthetic Leather" },
      { title: "Midsole", info: "Synthetic Resin" },
      { title: "Outsole", info: "Rubber Sole" },
    ],
  },

  {
    _id: uuid(),

    title: "Power Cushion 37",

    brand: "Yonex",

    price: "2,999",

    image: pc37,

    rating: 2,

    categoryName: "Shoe",

    description: [
      {
        title: "Material",
        info: "POWER CUSHION+, POWER CUSHION, Durable Skin Light, Feather Bounce Foam",
      },
      { title: "Upper", info: "Synthetic Fiber" },
      { title: "Midsole", info: "Synthetic Resin" },
      { title: "Outsole", info: "Rubber Sole" },
    ],
  },

  {
    _id: uuid(),

    title: "Eclipsion",

    brand: "Yonex",

    price: "10,999",

    image: eclipsion,

    rating: 4,

    categoryName: "Shoe",

    description: [
      {
        title: "Material",
        info: "POWER CUSHION+, POWER CUSHION, Durable Skin, Power Graphite Sheet, Feather Bounce Foam",
      },
      { title: "Upper", info: "Synthetic Fiber" },
      { title: "Midsole", info: "Synthetic Resin" },
      { title: "Outsole", info: "Rubber Sole" },
    ],
  },

  {
    _id: uuid(),

    title: "Power Cushion Aero",

    brand: "Yonex",

    price: "8,999",

    image: pcAero,

    rating: 5,

    categoryName: "Shoe",

    description: [
      {
        title: "Material",
        info: "POWER CUSHION+, POWER CUSHION, Double Raschel Mesh, Durable Skin Light, Feather Bounce Foam",
      },
      { title: "Upper", info: "Synthetic Fiber" },
      { title: "Midsole", info: "Synthetic Resin" },
      { title: "Outsole", info: "Rubber Sole" },
    ],
  },
];
