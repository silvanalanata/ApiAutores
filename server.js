const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors());

const mongoose = require("./server/config/mongoose");
const router = require("./server/config/routes");

app.use(router);



app.listen(8000, function () {
  console.log("servidor ejecutandose en  http://localhost:8000");
});
