const mongoose = require("mongoose");
const Product = require("./model/Product.model");
const { connection } = require("./db");

const seedProducts = [
  {
    name: "iPhone 12",
    description: "Apple iPhone 12 with stunning design and performance",
    price: 799,
    images: [
      "https://rukminim2.flixcart.com/image/850/1000/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=90&crop=false", // white
      "https://rukminim2.flixcart.com/image/850/1000/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=20&crop=false", // blue
      "https://media.croma.com/image/upload/v1662424508/Croma%20Assets/Communication/Mobiles/Images/229926_xrit8z.png", // red
    ],
    category: "Electronics",
    variants: [
      {
        attributes: new Map([
          ["color", "White"],
          ["storage", "128GB"],
        ]),
        stock: 12,
        sku: "IP12-WHT-128",
      },
      {
        attributes: new Map([
          ["color", "Blue"],
          ["storage", "128GB"],
        ]),
        stock: 8,
        sku: "IP12-BLU-128",
      },
      {
        attributes: new Map([
          ["color", "Blue"],
          ["storage", "512GB"],
        ]),
        price: 999,
        stock: 5,
        sku: "IP12-BLU-512",
      },
      {
        attributes: new Map([
          ["color", "Red"],
          ["storage", "128GB"],
        ]),
        stock: 6,
        sku: "IP12-RED-128",
      },
      {
        attributes: new Map([
          ["color", "Red"],
          ["storage", "512GB"],
        ]),
        price: 999,
        stock: 4,
        sku: "IP12-RED-512",
      },
    ],
  },
  {
    name: "Head Speed MP",
    description: "A fast, spin-friendly racquet ideal for aggressive players.",
    price: 220,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-R6KkVwW4iXPu1EhM5huTobJ6Kq5t3G8mhYzfOFt9AK-sYSEjo1oVtFEzSsT9eZnrEblQRfPQU1d5N9OG_kAp2fDQlT3etNLg6FODEfGEEJ1WGauF9SeQPg",
    ],
    category: "Sports",
    variants: [
      {
        attributes: new Map([["gripSize", "4 3/8"]]),
        stock: 10,
        sku: "HSPMP-438",
      },
      {
        attributes: new Map([["gripSize", "4 1/2"]]),
        stock: 8,
        sku: "HSPMP-45",
      },
    ],
  },
  {
    name: "Head Radical",
    description: "A well-balanced racquet for control and power.",
    price: 190,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1vjStd-b1s07aJIai1hEmr9OT1_Rx8rNK24kiga7ZhcucWjbFkB_cUTsIYwFKY9koHYK__ypepr-GVpQYXojZ1GV6kyfipF-kFL8ygwGNpuXOiyXDO7uA",
    ],
    category: "Sports",
    variants: [
      {
        attributes: new Map([["gripSize", "4 3/8"]]),
        stock: 6,
        sku: "HRAD-438",
      },
    ],
  },
  {
    name: "Wilson Pro Staff 97",
    description:
      "A classic racquet trusted by professionals for its precision.",
    price: 250,
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrlwK69kadhCGudvKJ9E5woPyn6et8s2pB75SC88W1CMkEMDzeX9BTsUyFlEtslr49M3bccr2H-TMQ-BIQ1V1dclZXO43FDeWHgyXxNCOskzgGGUT_Adt1AA",
    ],
    category: "Sports",
    variants: [
      {
        attributes: new Map([["gripSize", "4 3/8"]]),
        stock: 5,
        sku: "WPS97-438",
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");

    await Product.deleteMany();
    await Product.insertMany(seedProducts);

    console.log("Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
