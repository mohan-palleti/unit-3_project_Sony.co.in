const { createClient } = require("redis");
require("dotenv").config();
var redis = require("redis"),
  client = redis.createClient(
    17398,
    "redis-17398.c16.us-east-1-3.ec2.cloud.redislabs.com",
    { no_ready_check: true }
  );
//if ("16VOc6jgIPBRo93T5NSKKLyRzmj45acl") {
client.auth(process.env.PASS, function () {
  console.log("Redis client connected");
});
//}
module.exports = client;
