const net = require("net");

let client = new net.Socket();
client.connect(5000, "192.168.137.198", () => {
  console.log("connected");
  client.write(JSON.stringify({ angle1: 24, angle2: 26 }));
});

client.on("data", data => {
  console.log("received data" + data);
  client.destroy();
});

client.on("close", () => {
  console.log(closed);
});
