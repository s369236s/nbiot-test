import net from "net";

const PORT = parseInt(process.env.PORT) || 8080;

var server = net.createServer(function (socket) {
  socket.on("data", (msg) => {
    try {
      socket.write("Echo server\r\n");
      console.log(msg);
      console.log(msg.readIntBE(0, msg.byteLength).toString(16));
      console.log(msg.readIntLE(0, msg.byteLength).toString(16));
    } catch (err) {
      console.log(err);
    }
  });
  socket.pipe(socket);
});

server.listen(PORT, () => console.log(`port ${PORT}`));
// import express from "express";

// const app = express();

// const PORT = parseInt(process.env.PORT) || 8080;

// app.get("", (req, res) => res.send("hey"));

// app.listen(PORT, () => console.log("start at " + PORT));
