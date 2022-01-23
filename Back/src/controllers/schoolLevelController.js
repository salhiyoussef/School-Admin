const SchoolLevel = require("../models/schoolLevelModel");
const schoolLevelController = {};

// R E G I S T E R   N E W   S C H O L L   L E V E L
schoolLevelController.register = async (req, res, next) => {
  const {
    body: { level },
    user: {_id}
  } = req;
  try {
    const newSchoolLevel = new SchoolLevel({ level,  userId: _id });
    const schoolLevel = await newSchoolLevel.save();
    return res.send({
      message: "Add New school level Successfully",
      schoolLevel
    });
  } catch (e) {
    next(e);
  }
};

// G E T    S C H O L L   L E V E L
schoolLevelController.getSchoolLevel = async (req, res, next) => {
    const {user: {_id}} = req;
  try {
    const result = await SchoolLevel.find({});
    return res.send({
      total: result.length || 0,
      result
    });
  } catch (e) {
    next(e);
  }
};

// D E L E T E   S C H O L L   L E V E L
schoolLevelController.delete = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await SchoolLevel.findOneAndDelete({ _id: id });
    if (!result) {
      const error = new Error("School Level not Found");
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

// U P D A T E   S C H O L L   L E V E L
schoolLevelController.update = async (req, res, next) => {
  const {
    params: { id },
    body: { level }
  } = req;
  try {
    const result = await SchoolLevel.findOneAndUpdate({ _id: id }, { level });
    if(!result) {
      const error = new Error("This Level Not Found");
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

module.exports = schoolLevelController;
