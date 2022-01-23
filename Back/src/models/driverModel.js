const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema, model } = mongoose;

const driverSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 24, minlength: 4 },
  lastName: {
    type: String,
    required: true,
    uppercase: true,
    maxlength: 24,
    minlength: 4
  },
  email: { type: String, required: true, unique: true, index: true },
  permis: { type: String, required: true, unique: true, index: true },
  cin: {
    type: String,
    required: true,
    unique: true,
    index: true,
    maxlength: 8,
    minlength: 8
  },
  phone: { type: String, required: true, unique: true, index: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  // dateOfBirth: { type: Date, required: true },
  dateCreation: { type: Date, default: new Date() }
});

driverSchema.plugin(mongoosePaginate);
const DriverModel = model("DriverModel", driverSchema);
module.exports = DriverModel;
