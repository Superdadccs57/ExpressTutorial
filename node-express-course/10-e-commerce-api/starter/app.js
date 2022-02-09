// Dot ENV
require('dotenv').config();

// Express Async Errors
require('express-async-errors');

// Express
const express = require('express');
const app = express();

// Rest of Packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

// Database
const connectDB = require('./db/connect');

// Routers
const authRouter = require('./routes/authRoutes');

// Middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send('eCommerce Project');
});
app.get('/api/v1', (req, res) => {
  console.log(req.cookies);
  res.send('Logging Cookies');
});

app.use('/api/v1/auth', authRouter);

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
