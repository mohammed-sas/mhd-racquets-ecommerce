import { v4 as uuid } from "uuid";
import nf555 from "../../assets/products/nf-555.webp"
import nf001 from "../../assets/products/nf-001.webp"
import nf700  from "../../assets/products/nf-700.webp"
import astrox100 from "../../assets/products/astrox100zz.webp"
import astrox99 from "../../assets/products/ax99.webp"
import astrox3dg from "../../assets/products/astrox_3dg.webp"
import arc11 from "../../assets/products/arc11.webp"
import voltric from "../../assets/products/voltric-lite.webp"
import aerosensa50 from "../../assets/products/aerosensa_50.webp";
import aeroclub33 from "../../assets/products/aeroclub_33.webp";
import mavis2000 from "../../assets/products/mavis2000w.webp"
import mavis350 from "../../assets/products/mavis350.webp"
import aerobiteBoost from "../../assets/products/aerobite_boost.webp"
import aerobite from "../../assets/products/aerobite.webp"
import bg80 from "../../assets/products/bg80.webp"
import pc65 from "../../assets/products/power-65x.webp"
import pc37 from "../../assets/products/pc-37.webp"
import eclipsion from "../../assets/products/eclipsion.webp"
import pcAero from "../../assets/products/power-cushion-aero.webp"
import skyark from "../../assets/products/skyark.webp"
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
    rating:3,
    image:nf555,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Nanoflare 001",
    brand: "Yonex",
    price: "2190",
    rating:4,
    image:nf001,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Nanoflare 700",
    brand: "Yonex",
    price: "11,599",
    image:nf700,
    rating:5,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Astrox 100zz",
    brand: "Yonex",
    price: "13,250",
    image:astrox100,
    rating:4,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Astrox 99 pro",
    brand: "Yonex",
    price: "10,199",
    image:astrox99,
    rating:3,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Astrox 3 DG",
    brand: "Yonex",
    price: "4,199",
    image:astrox3dg,
    rating:3,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Arcsaber 11",
    brand: "Yonex",
    price: "8,889",
    image:arc11,
    rating:5,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Voltric lite",
    brand: "Yonex",
    price: "1,999",
    image:voltric,
    rating:2,
    categoryName: "Racquet",
  },
  {
    _id: uuid(),
    title: "Aerosensa 50",
    brand: "Yonex",
    price: "3,730",
    image:aerosensa50,
    rating:5,
    categoryName: "ShuttleCock",
  },
  {
    _id: uuid(),
    title: "Aeroclub 33",
    brand: "Yonex",
    price: "1,250",
    image:aeroclub33,
    rating:3,
    categoryName: "ShuttleCock",
  },
  {
    _id: uuid(),
    title: "Mavis 2000",
    brand: "Yonex",
    price: "2,599",
    rating:4,
    image:mavis2000,
    categoryName: "ShuttleCock",
  },
  {
    _id: uuid(),
    title: "Mavis 350",
    brand: "Yonex",
    price: "999",
    rating:4,
    image:mavis350,
    categoryName: "ShuttleCock",
  },
  {
    _id: uuid(),
    title: "Aerobite Boost",
    brand: "Yonex",
    price: "975",
    rating:3,
    image:aerobiteBoost,
    categoryName: "String",
  },
  {
    _id: uuid(),
    title: "Aerobite Boost",
    brand: "Yonex",
    price: "780",
    rating:2,
    image:aerobite,
    categoryName: "String",
  },
  {
    _id: uuid(),
    title: "BG80 Power",
    brand: "Yonex",
    price: "555",
    image:bg80,
    rating:4,
    categoryName: "String",
  },
  {
    _id: uuid(),
    title: "Skyark",
    brand: "Yonex",
    price: "950",
    image:skyark,
    rating:5,
    categoryName: "String",
  }
  ,
  {
    _id: uuid(),
    title: "Power Cushion 65",
    brand: "Yonex",
    price: "10,999",
    image:pc65,
    rating:5,
    categoryName: "Shoe",
  },
  {
    _id: uuid(),
    title: "Power Cushion 37",
    brand: "Yonex",
    price: "2,999",
    image:pc37,
    rating:2,
    categoryName: "Shoe",
  },
  {
    _id: uuid(),
    title: "Eclipsion",
    brand: "Yonex",
    price: "10,999",
    image:eclipsion,
    rating:4,
    categoryName: "Shoe",
  },
  {
    _id: uuid(),
    title: "Eclipsion",
    brand: "Yonex",
    price: "8,999",
    image:pcAero,
    rating:5,
    categoryName: "Shoe",
  }
];
