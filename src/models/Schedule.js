import mongoose from "mongoose";

const scheduleObjectSchema = new mongoose.Schema({
  lesson_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  week_day: {
    type: Number,
    required: true,
  },
  at: { type: String, required: true },
  to: { type: String, required: true },
});

const scheduleSchema = new mongoose.Schema({
  lessonSchedule: [scheduleObjectSchema],
});

const Schedule =
  mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);

export default Schedule;
