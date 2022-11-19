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
    ingredients: [],
  },
  {
    name: "Torta Sacher",
    price: 22,
    ingredients: [],
  },
]);

db.ingredients.insertMany([
  {
    name: "Farina",
    unit: "g",
  },
  {
    name: "Latte",
    unit: "ml",
  },
  {
    name: "Zucchero",
    unit: "g",
  },
  {
    name: "Uova",
    unit: "g",
  },
  {
    name: "Cioccolato",
    unit: "g",
  },
  {
    name: "Burro",
    unit: "g",
  },
  {
    name: "Marmellata d'albicocca",
    unit: "g",
  },
]);
