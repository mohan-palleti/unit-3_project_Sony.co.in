const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    `mongodb://mohan:${process.env.DB}@cluster0-shard-00-00.8wdgb.mongodb.net:27017,cluster0-shard-00-01.8wdgb.mongodb.net:27017,cluster0-shard-00-02.8wdgb.mongodb.net:27017/authentication?ssl=true&replicaSet=atlas-9cuzcc-shard-0&authSource=admin&retryWrites=true&w=majority`
  );
};
