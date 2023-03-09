import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
