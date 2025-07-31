import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
dotenv.config();

let Sockets = [];

io.on("connection", (socket) => {
  console.log("Connecting...");
  let socketsArr = [];
  socketsArr.push(socket.id);

  socket.on("Send-Message", (data) => {
    socket.broadcast.emit("res-Message", data);
  });

  const user = { id: socket.id, userName: "Mosha" };

  Sockets.push(user);

  io.emit("get-sockets", Sockets);
});

server.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});
