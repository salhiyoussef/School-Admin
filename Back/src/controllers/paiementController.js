const PaiementModel = require("../models/paiementModel");

const paiementController = {};

// R E G I S T E R
paiementController.register = async (req, res, next) => {
  const {
    body: {
      fraisInscription,
      fraisTransport,
      montant,
      idStudent,
      typePaiement,
      dateCreation
    }
  } = req;
  const newPaiement = new PaiementModel({
    fraisInscription,
    fraisTransport,
    montant,
    idStudent,
    typePaiement,
    dateCreation
  });
  try {
    await newPaiement.save();
    return res.send({
      message: "New Paiement add Successfully"
    });
  } catch (e) {
    if (e.code === 11000 && e.name === "MongoError") {
      const error = new Error(`fraisInscription/fraisTronsport/montant is already taken`);
      next(error);
    } else {
      next(e);
    }
  }
};

// G E T   P A I E M E N T 
paiementController.get = async (req, res, next) => {
  // const {
  //   query: { offset, limit }
  // } = req;
  // const options = {
  //   page: parseInt(offset, 10),
  //   limit: parseInt(limit, 10),
  //   sort: { dateCreation: -1 }
  // };
  try {
    PaiementModel.find({}).populate('idStudent').exec((error , result)=>{
      return res.send({
        result,
      });
    })
  } catch (e) {
    next(e);
  }
};


// D E L E T E   P A I E M E N T
paiementController.delete = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await PaiementModel.findOneAndDelete({ _id: id });
    if (!result) {
      const error = new Error("This Paiement not found");
      error.status = 404;
      next(error);
    }
    return res.send({
      message: "Delete Successfully"
    });
  } catch (e) {
    next(e);
  }
};

// U P D A T E   P A I E M E N T
paiementController.update = async (req, res, next) => {
  const {
    params: { id },
    body: {
        fraisInscription,
        fraisTransport,
        montant,
        typePaiement,
    }
  } = req;
  try {
    const result = await PaiementModel.findOneAndUpdate(
      { _id: id },
      { fraisInscription,
        fraisTransport,
        montant,
        typePaiement
     }
    );
    if (!result) {
      const error = new Error("This Paiement not found");
      error.status = 404;
      next(error);
    }
    return res.send({
      message: "Update Successfully"
    });
  } catch (e) {
    next(e);
  }
};

module.exports = paiementController;
