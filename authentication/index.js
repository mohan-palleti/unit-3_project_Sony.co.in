require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
var cors = require("cors");

app.use(cors());
const user_auth = require("./controllers/authenticate_sony");
app.use("/user", user_auth);
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
