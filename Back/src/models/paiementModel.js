const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema, model } = mongoose;

const paiementSchema = new Schema({
  fraisInscription: { type: String, required: true},
  fraisTransport: {type: String,required: true},
  montant: { type: String, required: true, index: true },
  idStudent: { 
    type: String,
    required: false,
    unique: true,
    index: true,
    ref: 'Student'
  },
  typePaiement:{type: Boolean, required: false},
  dateCreation: { type: Date, default: new Date() },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
});

paiementSchema.plugin(mongoosePaginate);
const PaiementModel = model("PaiementModel", paiementSchema);
module.exports = PaiementModel;
