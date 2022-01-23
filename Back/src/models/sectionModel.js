const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const sectionSchema = new Schema({
  section: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassSchool"
  }
});

const Section = model('Section', sectionSchema);
module.exports = Section;
