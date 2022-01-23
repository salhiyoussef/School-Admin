const Transport = require("../models/transportModel");

const transportController = {};

// R E G I S T E R
transportController.register = async (req, res, next) => {
  const {
    body: { routeName, vehiculeNumber, licenseNumber, driverId }
  } = req;
  const newTransport = new Transport({
    routeName,
    vehiculeNumber,
    licenseNumber,
    driverId
  });  
  try {
    await newTransport.save();
    return res.send({
      message: "New Transport add Successfully"
    });
  } catch (e) {
    if (e.code === 11000 && e.name === "MongoError") {
      const error = new Error(`vehiculeNumber/licenseNumber is already taken`);
      next(error);
    } else {
      next(e);
    }
  }
};

// P O P U L A T E
// Transport.find({})
// .populate('driverId')
// .exec((error , driver)=>{
//   console.log(driver);
  
// })

// GET ALL TRANSPORT
transportController.get = async (req, res, next) => {
  try {
    Transport.find({}).populate('driverId').exec((error , result)=>{
      return res.send({
        result,
      });
    })
      
  } catch (e) {
    next(e);
  }
};

// D E L E T  E   T R A N S P O RT
transportController.delete = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await Transport.findOneAndDelete({ _id: id });
    if (!result) {
      const error = new Error("This Transport not found");
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

// U P D A TE   T R A N S P O R T
transportController.update = async (req, res, next) => {
  const {
    params: { id },
    body: { routeName, vehicleNumber, licenseNumber, driverId }
  } = req;
  try {
    const result = await Transport.findOneAndUpdate(
      { _id: id },
      { routeName, vehiculeNumber, licenseNumber, driverId }
    );
    if (!result) {
      const error = new Error("This Transport not found");
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

module.exports = transportController;
