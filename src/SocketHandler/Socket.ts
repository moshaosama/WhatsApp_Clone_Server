import { ResponseMessage } from "../Controller/Chats/ResponseMessage";
import { SendMessage } from "../Controller/Chats/SendMessage";
import { Createuser } from "../Controller/Users/CreateUser";
import { DeleteUser } from "../Controller/Users/DeleteUser";
import { GetUserById } from "../Controller/Users/getUserByid";
import { GetUsers } from "../Controller/Users/GetUsers";

let Sockets: any[] = [];
export const handleSocket = (io: any) => {
  io.on("connection", async (socket: any) => {
    console.log("Connecting...");
    let socketsArr = [];
    socketsArr.push(socket.id);

    const user = { id: socket.id, userName: "Mosha" };
    await Createuser({ id: user.id, userName: user.userName });
    Sockets.push(user);

    socket.join(user.id);

    socket.on("disconnect", async () => {
      await DeleteUser(socket.id);
    });

    socket.on("get-sockets", async () => {
      const users = await GetUsers();
      socket.emit("get-sockets", users);
    });

    socket.on("set-user-by-id", async (data: any) => {
      const user = await GetUserById(data);
      socket.emit("get-user-by-id", user);
    });

    socket.on(
      "send-message-client",
      (data: { receiverId: string; message: string }) => {
        io.to(data.receiverId).emit("send-message-server", data.message);
        ResponseMessage({ message: data.message, user_id: data.receiverId });
        SendMessage({ message: data.message, user_id: socket.id });
      }
    );
  });
};
