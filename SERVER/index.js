const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");

const app = express();
 
//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
 
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
 
module.exports = app;

//https://blog.appsignal.com/2022/08/17/build-a-crud-app-with-nodejs-and-mongodb.html