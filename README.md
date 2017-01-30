# beauty-mean

Stack:

* MongoDB
* Express
* Angular
* Node

*Note: Requires MongoDB server running.*

## Developing

* `npm install` to resolve dependencies

* Run `node server/app.js`

* Seed database products: `mongoimport --db beauty-dev --collection products --type json --file server/products-seed.json --jsonArray --drop`

* Seed database products: `mongoimport --db beauty-dev --collection users --type json --file server/users-seed.json --jsonArray --drop`
