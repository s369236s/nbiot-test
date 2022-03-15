import net from "net";

const PORT = parseInt(process.env.PORT) || 8080;

var server = net.createServer(function (socket) {
  try {
    console.log("connect");
    socket.on("data", (msg) => {
      console.log(msg);
      // console.log(msg.toString("hex"));
    });

    socket.on("end", () => {
      console.log("disconnected");
    });
    socket.pipe(socket);
  } catch (err) {
    console.log(err);
  }
});

server.listen(PORT, () => console.log(`port ${PORT}`));
// import express from "express";

// const app = express();

// const PORT = parseInt(process.env.PORT) || 8080;

// app.get("", (req, res) => res.send("hey"));

// app.listen(PORT, () => console.log("start at " + PORT));
