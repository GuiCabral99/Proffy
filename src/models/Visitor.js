import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.ObjectId, required: true },
  date: { type: Date, default: Date.now },
});

const Visitor =
  mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema);

export default Visitor;
