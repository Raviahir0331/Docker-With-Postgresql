const { Client } = require("pg");
const client = new Client({
  user: "root",
  host: "localhost",
  password: "root",
  database: "db",
  port: 5432,
});
client.connect(function (err) {
  if (err) {
    console.log(err);
  }
  console.log("database connected");
});
module.exports = client;