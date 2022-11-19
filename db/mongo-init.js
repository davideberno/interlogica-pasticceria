db.users.insertMany([
  {
    email: "luana@gmail.com",
    password: "$2b$10$wXm88EpDHBu4bzglE3amauj6QXT40yyYIQpbFYhMjO3OUeczYkmA.",
  },
  {
    email: "maria@gmail.com",
    password: "$2b$10$1iKDXMCg/b9Nh3iR35HG.u/hfsLg0ajmUXcekzOECqis5do3EMwcu",
  },
]);

db.sweets.insertMany([
  {
    name: "Torta Paradiso",
    price: 14,
    ingredients: ["63791f8f7d1a90f641fd2ed0", "63791fc6b42bfa4e4846f3ac", "63791ffaeaa66b580dd450a8", "6379203facb2a36661eecf29"],
  },
  {
    name: "Torta Sacher",
    price: 22,
    ingredients: [
      "63791f8f7d1a90f641fd2ed0",
      "63791fc6b42bfa4e4846f3ac",
      "63791ffaeaa66b580dd450a8",
      "6379203facb2a36661eecf29",
      "6379203066692adaf60916f4",
      "6379205f3a16714581510422",
      "6379207c0f4d286b57add300",
    ],
  },
]);

db.ingredients.insertMany([
  {
    _id: "63791f8f7d1a90f641fd2ed0",
    name: "Farina",
    unit: "g",
  },
  {
    _id: "63791fc6b42bfa4e4846f3ac",
    name: "Latte",
    unit: "ml",
  },
  {
    _id: "63791ffaeaa66b580dd450a8",
    name: "Zucchero",
    unit: "g",
  },
  {
    _id: "6379203facb2a36661eecf29",
    name: "Uova",
    unit: "g",
  },
  {
    _id: "6379203066692adaf60916f4",
    name: "Cioccolato",
    unit: "g",
  },
  {
    _id: "6379205f3a16714581510422",
    name: "Burro",
    unit: "g",
  },
  {
    _id: "6379207c0f4d286b57add300",
    name: "Marmellata d'albicocca",
    unit: "g",
  },
]);
