const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/shopping-cart";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
    console.log('Connected to mongodb');
  //const collection = client.db("shopping-cart").collection("products");
  // perform actions on the collection object
  //client.close();
});

module.exports = client;