import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", TeacherSchema);

export default Teacher;
