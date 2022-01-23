const ClassSchool = require("../models/classModel");
const SchoolLevel = require("../models/schoolLevelModel");

const classController = {};

// R E G I S T E R   C L A S S   S C H O O L
classController.register = async (req, res, next) => {
  const {
    body: { classLevel, schoolLevelId },
    user: {_id}
  } = req;
  try {
    const checkLevel = await SchoolLevel.findOne({ _id: schoolLevelId });
    if (!checkLevel) {
      const error = new Error("Level Not Found");
      error.status = 404;
      next(error);
    }
    const newClass = new ClassSchool({
      classLevel,
      schoolLevelId,
      userId: _id
    });
    const classSchool = await newClass.save();
    return res.send({
      message: "Add New Class Successfully",
      classSchool
    });
  } catch (e) {
    next(e);
  }
};

// G E T   A L L   C L A S S   S C H O O L
classController.getAll = async (req, res, next) => {
  try {
    const {
      user: { _id }
    } = req;
    const result = await ClassSchool.find({});
    return res.send({
      total: result.length || 0,
      result
    });
  } catch (e) {
    next(e);
  }
};

// G E T   C L A S S   B Y   L E V E L   I D
classController.getClassByLevelId = async (req, res, next) => {
  const {
    user: { _id },
    params: { idLevel }
  } = req;
  try {
    const result = await ClassSchool.find({
      // userId: _id,
      schoolLevelId: idLevel
    });
    return res.send({
      total: result.length || 0,
      result
    });
  } catch (e) {
    next(e);
  }
};

// D E L E T E   C L A S S
classController.delete = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await ClassSchool.findOneAndDelete({ _id: id });
    if (!result) {
      const error = new Error("This Class Not Found");
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

// U P D A T E   C L A S S
classController.update = async (req, res, next) => {
    const {params: {id}, body:{classLevel}} = req;
    try {
        const result = await ClassSchool.findOneAndUpdate({_id: id}, {classLevel});
        if(!result) {
            const error = new Error("This Class Not Found");
            error.status = 404;
            next(error);
        }
        return res.send({
            message: "Update Successfully"
          });
    } catch(e) {
        next(e);
    }
}

module.exports = classController;
