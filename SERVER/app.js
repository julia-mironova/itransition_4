const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const authRouter = require('./routes/AuthRoutes.js');
const usersRouter = require('./routes/UsersRoutes.js');

const PORT = process.env.PORT || config.get('serverPort');
const DB_URL = config.get('dbURL');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/login', authRouter);
app.use('/api/users', usersRouter);

const run = async () => {
  try {
  await mongoose.connect(DB_URL);

  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
   });
  } catch (e) {
    console.error(`error: ${e}`)
  }
}

run();
//https://blog.appsignal.com/2022/08/17/build-a-crud-app-with-nodejs-and-mongodb.html