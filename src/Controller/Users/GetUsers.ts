import { DB } from "../../ConnectDB/DB";

export const GetUsers = async () => {
  const QueryGetUsers = "SELECT * FROM users";
  const [rows] = await DB.promise().query(QueryGetUsers);
  return rows;
};
