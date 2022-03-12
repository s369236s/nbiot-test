import net from "net";

const PORT = parseInt(process.env.PORT) || 8080;

var server = net.createServer(function (socket) {
  socket.on("data", (msg) => {
    try {
      socket.write("Echo server\r\n");
      console.log(msg.toString());
      console.log(msg);
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
