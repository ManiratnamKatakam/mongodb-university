/**
 * Lab - $facets
 * How many movies are in both the top ten highest rated movies according to the imdb.rating and the metacritic fields? We should get these results with exactly one access to the database.
 db.movies.aggregate([
  {"$unwind": "$imdb"},
  {"$project": { "_id": "$metacritics", "hq": "$imdb.rating"}},
  {"$sortByCount": "$hq"},
  {"$sort": {"_id":-1}},
  {"$limit": 10}
])

-- You need to consider the count value you see for the  _id which is not null
 */

