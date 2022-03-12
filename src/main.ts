import net from "net";

const PORT = parseInt(process.env.PORT) || 3030;

var server = net.createServer(function (socket) {
  socket.write("Echo server\r\n");
  socket.on("data", (msg) => {
    console.log(msg.toString());
  });
  socket.pipe(socket);
});

server.listen(PORT);
