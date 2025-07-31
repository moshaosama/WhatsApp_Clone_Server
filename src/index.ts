import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { handleSocket } from "./SocketHandler/Socket";
import { connectDB } from "./ConnectDB/DB";
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
dotenv.config();

handleSocket(io);

server.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
  connectDB();
});
