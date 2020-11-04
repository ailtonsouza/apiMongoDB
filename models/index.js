import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

db.gradeModel = mongoose.model("grade", gradeSchema, "grade");

export { db };
