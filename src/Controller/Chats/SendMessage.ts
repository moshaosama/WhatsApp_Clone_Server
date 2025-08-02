import { DB } from "../../ConnectDB/DB";

export const SendMessage = async (data: {
  message: string;
  user_id: string;
}) => {
  const Query = "INSERT INTO sendmessage (message, user_id) VALUES (?,?)";

  const Value = [data.message, data.user_id];

  await DB.promise().query(Query, Value);
};
