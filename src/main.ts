import net from "net";
import fs from "fs";

const PORT = parseInt(process.env.PORT) || 8080;

var server = net.createServer(function (socket) {
  try {
    console.log("connect");
    socket.on("data", (msg) => {
      console.log(msg);
      const writerStream = fs.createWriteStream("output.txt");
      writerStream.write(msg + "\n", "utf-8");
      writerStream.end();
      writerStream.on("finish", function () {
        console.log("寫入完成。");
      });

      writerStream.on("error", function (err) {
        console.log(err.stack);
      });
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
