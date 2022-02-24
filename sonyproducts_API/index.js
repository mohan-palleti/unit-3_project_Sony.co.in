const express = require("express");

const app = express();
app.use(express.json());
const connect = require("./src/configs/db");
const redisConnect = require("./src/configs/redis");
const tv_controller = require("./src/controllers/tv_controller");
const cors = require("cors");

app.use(cors());
const headphone = require("./src/controllers/headphone_controller");

const mp3_controller = require("./src/controllers/mp3_controller");

app.use("/mp3player", mp3_controller);
app.use("/headphone", headphone);
app.use("/tvProducts", tv_controller);
let port = process.env.PORT || 4545;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is running on Port ${port}`);
  } catch (err) {
    console.log("err", err);
  }
});
