import database from "@/services/dbconnect";
import Lesson from "@/models/Lesson";

database();

export default async function (req, res) {
  const { method } = req;
  const { lessonId } = req.query;
  switch (method) {
    case "GET":
      try {
        const lesson = await Lesson.findOne({ _id: lessonId });
        res.status(200).json({ sucess: true, lesson });
      } catch (error) {
        res.status(500).json({ sucess: false, error: error });
      }
      break;
    case "PATCH":
      const { subject, cost } = req.body;
      const lessonData = { subject, cost };
      try {
        await Lesson.updateOne({ _id: lessonId }, lessonData);
        res.status(200).json({ sucess: true, lessonData });
      } catch (error) {
        res.status(500).json({ sucess: false, error: error });
      }
      break;
    case "DELETE":
      try {
        await Lesson.deleteOne({ _id: lessonId });
        res.status(200).json({ sucess: true });
      } catch (error) {
        res.status(500).json({ sucess: false, error: error });
      }
      break;
  }
}
