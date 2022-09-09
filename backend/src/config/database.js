const mongoose = require('mongoose');
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/db_todoApp');
/*MongoClient.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });*/