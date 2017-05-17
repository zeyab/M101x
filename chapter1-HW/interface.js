/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  db.collection('movies').insert(doc, function(error, result){
  	if(error){
  		console.log("Insert failed.");
  		console.log(error);
  		process.exit(1);
  	}
  	if(callback){
	  	callback(error, result);
	  }
  });
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  console.log('byDirector');
  db.collection('movies').find({"director": director}).sort({"title": 1}).toArray(function(error, docs) {
  	if(error){
  		console.log(error);
  		process.exit(1);
  	}
  	console.log(docs);
  	if(callback)
    	callback(error, docs);
  });
};