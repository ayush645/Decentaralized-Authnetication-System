const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const authRoute = require("./routes/user");
const accountRecoveryRoutes  = require('./routes/recovery');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


app.use("/api/auth" , authRoute);
app.use("/api/account-recovery" , accountRecoveryRoutes);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");

    
  })
  .catch((error) => {
    console.log(error);
  });
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });