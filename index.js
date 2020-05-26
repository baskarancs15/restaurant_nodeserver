const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const resroutes = require("./routes/restaurantRouter");


// parse application/json
app.use(express.json());
//Route Middleware
app.use("/api", resroutes);

app.listen(3000, () => {
  console.log("ServerUp and Running");
});
