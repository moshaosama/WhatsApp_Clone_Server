import { DB } from "../../ConnectDB/DB";

export const ResponseMessage = async (data: {
  message: string;
  user_id: string;
}) => {
  const Query = "INSERT INTO resmessage (message, user_id) VALUES (?,?)";

  const Value = [data.message, data.user_id];

  await DB.promise().query(Query, Value);
};
