const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;

// To fix deprication errors if using > mongoose V6
// {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// }
