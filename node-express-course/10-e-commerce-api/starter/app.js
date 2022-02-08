// Dot ENV
require('dotenv').config();

// Express Async Errors
require('express-async-errors');

// Express
const express = require('express');
const app = express();

// Rest of Packages
const morgan = require('morgan')

// Database
const connectDB = require('./db/connect');

// Middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

app.use(morgan('tiny'))
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('eCommerce Project');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// Server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
