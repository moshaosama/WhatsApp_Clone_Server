import { Createuser } from "../Controller/Users/CreateUser";

let Sockets = [];
export const handleSocket = (io: any) => {
  io.on("connection", async (socket: any) => {
    console.log("Connecting...");
    let socketsArr = [];
    socketsArr.push(socket.id);

    socket.on("Send-Message", (data: any) => {
      socket.broadcast.emit("res-Message", data);
    });

    const user = { id: socket.id, userName: "Mosha" };
    await Createuser({ id: user.id, userName: user.userName });
    Sockets.push(user);

    socket.join(user.id);

    io.emit("get-sockets", Sockets);
  });
};
