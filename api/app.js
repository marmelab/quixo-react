require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./constants/api");
const router = require("./router");

const app = express();
app.use((req, res) =>
  res.header("Access-Control-Allow-Origin", req.headers.origin)
);
app.use(bodyParser.json());

router(app);

app.listen(PORT, () => console.log(`App listen on ${PORT}`));
