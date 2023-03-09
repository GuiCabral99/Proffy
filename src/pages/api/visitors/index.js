import database from "@/services/dbconnect";
import Visitor from "@/models/Visitor";

database();
export default async function handler(req, res) {
  const { method } = req;
  const { user_id } = req.body;
  switch (method) {
    case "POST":
      try {
        const sendConnection = await Visitor.create({ user_id });
        res.status(201).json({ sendConnection });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }

      break;
    case "GET":
      try {
        const totalConnections = await Visitor.countDocuments();
        res.status(200).json({ total: totalConnections });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }
  }
}
