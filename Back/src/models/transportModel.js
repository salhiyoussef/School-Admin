const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema, model } = mongoose;

const transportSchema = new Schema({
  routeName: { type: String, required: true },
  vehiculeNumber: { type: String, required: true, unique: true, index: true },
  licenseNumber: { type: String, required: true, unique: true, index: true },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DriverModel"
  },
  dateCreation: {type: Date, default: new Date()},
});

transportSchema.plugin(mongoosePaginate);
const Transport = model("Transport", transportSchema);
module.exports = Transport;
