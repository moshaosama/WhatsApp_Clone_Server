import { DB } from "../../ConnectDB/DB";

export const DeleteUser = async (id: string) => {
  const QueryDeleteUser = "DELETE FROM users WHERE user_id = ?";
  const ValueDeleteUser = [id];

  await DB.promise().query(QueryDeleteUser, ValueDeleteUser);
};
