const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");

// Middleware
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB connected successfully and listening to " + process.env.PORT
      );
    });
  })
  .catch((err) => console.log(err));

app.use("/api/tasks", taskRoutes);
