const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config();
const notFound = require('./middleware/not-found')

// middleware
app.use(express.static("./public"))
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);

app.use(notFound)

// Server Setup
const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening to ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
