const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const classSchema = new Schema({
  classLevel: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  schoolLevelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SchoolLevel"
  }
});

const ClassSchool = model('ClassSchool', classSchema);
module.exports = ClassSchool;
