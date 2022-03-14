import net from "net";

const PORT = parseInt(process.env.PORT) || 8080;

var server = net.createServer(function (socket) {
  socket.on("data", (msg) => {
    socket.write(msg);
    console.log(msg);
    // console.log(msg.toString("hex"));
  });
  socket.once("ready", () => {
    console.log("connect");
  });
  socket.once("end", () => {
    console.log("disconnected");
  });
  socket.pipe(socket);
});

server.listen(PORT, () => console.log(`port ${PORT}`));
// import express from "express";

// const app = express();

// const PORT = parseInt(process.env.PORT) || 8080;

// app.get("", (req, res) => res.send("hey"));

// app.listen(PORT, () => console.log("start at " + PORT));
