import { DB } from "../../ConnectDB/DB";

export const GetUserById = async (id: string) => {
  const QueryGetUserById = "SELECT * FROM users WHERE user_id = ?";
  const [rows] = await DB.promise().query(QueryGetUserById, [id]);
  return rows;
};
