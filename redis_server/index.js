const express = require("express");
const app = express();
const port = 4000;

const cors = require("cors");
app.use(cors());

const redis = require("redis");
const { json } = require("body-parser");
const client = redis.createClient({
  url: "redis://redis:6379",
});

(async function() {
	let prom = await client.connect();
  console.log('Redis Connected')
})();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/get-user", async (req, res) => {
  
  let value = await client.get("user");
  res.json({ message: JSON.stringify(value) });

});

app.post("/set-user", async (req, res) => {
  
  let value = await client.set("user", req.body.user);
  res.json({ message: JSON.stringify(value) });
  
});

// app.get("/", async (req, res) => {
//   await client.connect();
//   let value = await client.get("user");
//   res.json({ message: JSON.stringify(value) });
//   client.close();
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
