import mongoose from "mongoose";

function database() {
  const USERNAME = process.env.USERNAME_KEY;
  const PASSWORD = process.env.PASSWORD_KEY;
  return mongoose.connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@proffycluster.r3wcroo.mongodb.net/?retryWrites=true&w=majority`
  );
}

export default database;
