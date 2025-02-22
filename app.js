const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

//  built-in middle ware for parse
app.use(express.json());

// db connection
dotEnv.config();
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
