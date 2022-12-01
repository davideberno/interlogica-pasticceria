mongoimport --db interlogica-bakery --collection users --drop --file /docker-entrypoint-initdb.d/users.json --jsonArray && 
mongoimport --db interlogica-bakery --collection ingredients --drop --file /docker-entrypoint-initdb.d/ingredients.json --jsonArray &&
mongoimport --db interlogica-bakery --collection recipes --drop --file /docker-entrypoint-initdb.d/recipes.json --jsonArray &&
mongoimport --db interlogica-bakery --collection sweets --drop --file /docker-entrypoint-initdb.d/sweets.json --jsonArray 