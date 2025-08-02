import { DB } from "../../ConnectDB/DB";

export const Createuser = async (user: { id: string; userName: string }) => {
  const QueryCreateuser =
    "INSERT INTO users (user_id , userName) VALUES (? , ?)";

  const ValueCreateUser = [user.id, user.userName];

  await DB.promise().query(QueryCreateuser, ValueCreateUser);
};

