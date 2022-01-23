const DriverModel = require("../models/driverModel");

const driverController = {};

// R E G I S T E R
driverController.register = async (req, res, next) => {
  const {
    body: {
      firstName,
      lastName,
      email,
      cin,
      phone,
      permis,
      gender,
      address,
      dateOfBirth
    }
  } = req;
  const newDriver = new DriverModel({
    firstName,
    lastName,
    email,
    cin,
    phone,
    gender,
    permis,
    address,
    dateOfBirth
  });
  try {
    await newDriver.save();
    return res.send({
      message: "New Driver add Successfully"
    });
  } catch (e) {
    if (e.code === 11000 && e.name === "MongoError") {
      const error = new Error(`Email/cin/phone is already taken`);
      next(error);
    } else {
      next(e);
    }
  }
};

// G E T   D R I V E R
driverController.get = async (req, res, next) => {
  const {
    query: { offset, limit }
  } = req;
  const options = {
    page: parseInt(offset, 10),
    limit: parseInt(limit, 10),
    sort: { dateCreation: -1 }
  };
  try {
    const result = await DriverModel.paginate({}, options);
    const { docs, total } = result;
    return res.send({
      total,
      result: docs
    });
  } catch (e) {
    next(e);
  }
};

// G E T   D R I V E R   I N   F  I L T E R S
// driverController.filters = async (req, res, next) => {
//   const {
//     params: {
//       filters: { email, cin, phone }
//     }
//   } = req;
//   try {
//     const result = await DriverModel.find({
//       email,
//       cin,
//       phone
//     }).sort({ dateCreation: -1 });
//     console.log('result', result);
//     return res.send({
//       total: result.length || 0,
//       result
//     });
//   } catch (e) {
//     next(e);
//   }
// };

// D E L E T E   D R I V E R
driverController.delete = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await DriverModel.findOneAndDelete({ _id: id });
    if (!result) {
      const error = new Error("This Driver not found");
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

// U P D A T E   D R I V E R
driverController.update = async (req, res, next) => {
  const {
    params: { id },
    body: {
      firstName,
      lastName,
      email,
      cin,
      phone,
      gender,
      address,
      dateOfBirth
    }
  } = req;
  try {
    const result = await DriverModel.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, email, cin, phone, gender, address, dateOfBirth }
    );
    if (!result) {
      const error = new Error("This Driver not found");
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

module.exports = driverController;
