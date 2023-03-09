import database from "@/services/dbconnect";
import User from "@/models/User";

database();

export default async function handler(req, res) {
  const { method } = req;
  const { userId } = req.query;
  switch (method) {
    case "GET":
      try {
        const user = await User.findOne({ _id: userId });
        res.status(200).json({ sucess: true, user });
      } catch (error) {
        res.status(500).json({ sucess: false, error: error });
      }
      break;
    case "PATCH":
      const { name, avatar, whatsapp, bio } = req.body;
      const userData = { name, avatar, whatsapp, bio };
      try {
        await User.updateOne({ _id: userId }, userData);
        res.status(200).json({ sucess: true, userData });
      } catch (error) {
        res.status(500).json({ sucess: false, error: error });
      }
      break;
    case "DELETE":
      try {
        await User.deleteOne({ _id: userId });
        res.status(200).json({ sucess: true });
      } catch (error) {
        res.status(500).json({ sucess: false, error: `${error}` });
      }
      break;
  }
}
