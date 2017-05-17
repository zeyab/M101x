var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/m101x';
//uri = 'mongodb://admin:admin@meanedx-shard-00-00-jfvtc.mongodb.net:27017,meanedx-shard-00-01-jfvtc.mongodb.net:27017,meanedx-shard-00-02-jfvtc.mongodb.net:27017/m101x?ssl=true&replicaSet=meanedx-shard-0&authSource=admin';
//'mongodb://admin:admin@meanedx-shard-00-00-jfvtc.mongodb.net:27017,meanedx-shard-00-01-jfvtc.mongodb.net:27017,meanedx-shard-00-02-jfvtc.mongodb.net:27017/movies?ssl=true&replicaSet=meanedx-shard-0&authSource=admin';
//'mongodb://admin:admin@meanedx-shard-00-00-jfvtc.mongodb.net:27017/movies';

module.exports = function(callback) {
  mongodb.MongoClient.connect(uri, callback);
};