const express = require("express");
const cors = require("cors");
const net = require("net");
const app = express();
const port = 3001;

app.use(cors());
app.get("/", (req, res) => {
  let a1 = req.query.a1;
  let a2 = req.query.a2;
  let client = new net.Socket();

  client.on("data", data => {
    res.send("received");
    client.destroy();
  });

  client.on("close", () => {
    console.log("closed");
  });
  client.connect(5015, "192.168.137.198", () => {
    console.log("connected");
    client.write(JSON.stringify({ angle1: a1, angle2: a2 }));
  });
});

app.listen(port, () => console.log("listening"));
