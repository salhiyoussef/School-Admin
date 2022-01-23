const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema, model } = mongoose;

const MiniStudentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        uppercase: true
    },
    lastName: {
        type: String,
        required: true,
        uppercase: true
    },
    email: { type: String, required: true, index: true },
    classLevel: {
        type: String,
        required: true,
    },
    age: {type: Number},
    moyen: {type: Number},
    dateCreation: { type: Date, default: new Date() }
})

MiniStudentSchema.plugin(mongoosePaginate);
const MiniStudent = model("MiniStudent", MiniStudentSchema);
module.exports = MiniStudent;