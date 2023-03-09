import Schedule from "@/models/Schedule";
import database from "@/services/dbconnect";

database();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const result = await Schedule.find({});
        res.status(200).json({ result });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }

      break;
    case "DELETE":
      try {
        await Schedule.deleteMany({});
        res.status(200).json({ data: "todos os dados foram apagados" });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }
      break;
  }
}

// const filter = req.params;
// if (!filter.week_day || !filter.at || !filter.to) {
//   res.status(500).json({ sucess: false, error: "Nenhum filtro inserido" });
// } else {
//   res.send();
// }
