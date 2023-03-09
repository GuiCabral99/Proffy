import database from "../../../services/dbconnect";
import User from "../../../models/User";
import Lesson from "@/models/Lesson";
import ConvertTime from "@/services/convertTime";
import Schedule from "@/models/Schedule";

database();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
      try {
        const user = await User.create({ name, avatar, whatsapp, bio });
        const user_id = user._id;
        const lesson = await Lesson.create({ subject, cost, user_id });
        const lesson_id = lesson._id;

        const lessonSchedule = schedule.map((scheduleItem) => {
          return {
            lesson_id: lesson_id,
            week_day: scheduleItem.week_day,
            at: ConvertTime(scheduleItem.at),
            to: ConvertTime(scheduleItem.to),
          };
        });
        await Schedule.create({ lessonSchedule });

        res.status(200).json({ sucess: true, user: user });
      } catch (error) {
        res.status(500).json({ sucess: false, error: `${error}` });
      }
      break;
    case "GET":
      try {
        const users = await User.find();
        res.status(200).json({ sucess: true, users });
      } catch (error) {
        res.status(500).json({ sucess: false, error: `${error}` });
      }
      break;
    case "DELETE":
      try {
        await User.deleteMany({});
        res.status(200).json({ data: "todos os dados foram apagados" });
      } catch (error) {
        res.status(500).json({ error: `${error}` });
      }
      break;
  }
}
