import database from "@/services/dbconnect";
import Lesson from "@/models/Lesson";
import Schedule from "@/models/Schedule";
import ConvertTime from "@/services/convertTime";
import scheduleLesson from "@/controllers/lessonsController";

database();

// export default function GET(req, res) {
//   res.send("funcionou!");
// }

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      const { week_day, subject } = req.query;

      if (!week_day || !subject) {
        return res
          .status(500)
          .json({ sucess: false, error: "filtro não adicionado" });
      }

      // const timeInMinutes = ConvertTime(time);

      const filterLesson = await Lesson.find({ subject: subject });
      const filterSchedule = await Schedule.find(
        {
          "lessonSchedule.week_day": week_day,
        },
        { "lessonSchedule.$": 1 }
      );

      // console.log(filterSchedule);

      try {
        res.status(200).json({
          sucess: true,
          filterLesson,
          filterSchedule,
        });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }
      break;
    case "DELETE":
      try {
        await Lesson.deleteMany({});
        res.status(200).json({ data: "todos os dados foram apagados" });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }
      break;
  }
}
