import mongoose from "mongoose";

const LessonSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

const Lesson = mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);

export default Lesson;
