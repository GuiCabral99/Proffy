import mongoose from "mongoose";
import Visitor from "@/models/Visitor";

async function visitorsCount() {
  return await Visitor.countDocuments();
}

export default visitorsCount;
