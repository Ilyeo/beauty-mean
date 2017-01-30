'use strict';

var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

module.exports = {
  connect(){
    client.connect('mongodb://localhost:27017/beauty-dev', function (err, db){
      if(err){
        console.log('Error connecting to MongoDB - check mongod connection');
        process.exit(1);
      }
      _db = db;
      console.log('Connected to MongoDB');
    });
  },
  products(){
    return _db.collection('products');
  }
}
