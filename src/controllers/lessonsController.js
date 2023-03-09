import Schedule from "@/models/Schedule";
import Lesson from "@/models/Lesson";

export default async function scheduleLesson() {
  const lessons = await Lesson.find({});

  const schedules = await Schedule.find({});
  return { lessons, schedules };
}
