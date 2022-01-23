const Section = require("../models/sectionModel");
const ClassSchool = require("../models/classModel");

const sectionController = {};

// R E G I S T E R   S E C T I O N
sectionController.register = async (req, res, next) => {
  const {
    body: { section, classId },
    user: { _id }
  } = req;
  try {
    const checkClass = await ClassSchool.findOne({ _id: classId });
    if (!checkClass) {
      const error = new Error("Class Not Found");
      error.status = 404;
      next(error);
    }
    const newSection = new Section({
      section,
      classId,
      userId: _id
    });
    const sectionResult = await newSection.save();
    return res.send({
      message: "Add New Section Successfully",
      sectionResult
    });
  } catch (e) {
    next(e);
  }
};

// G E T   A L L   S E C T I O N
sectionController.getAll = async (req, res, next) => {
  try {
    const {
      user: { _id }
    } = req;
    const result = await Section.find({});
    return res.send({
      total: result.length || 0,
      result
    });
  } catch (e) {
    next(e);
  }
};

// G E T   S E C T I O N   B Y  C L A S S    I D
sectionController.getByClassId = async (req, res, next) => {
  const {
    params: { id },
    user: { _id }
  } = req;
  try {
    const result = await Section.find({
      // userId: _id,
      classId: id
    });
    return res.send({
      total: result.length || 0,
      result
    });
  } catch (e) {
    next(e);
  }
};

// D E L E T E   S E C T I O N
sectionController.delete = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await Section.findOneAndDelete({ _id: id });
    if (!result) {
      const error = new Error("Section Not Found");
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

// U P D A T E   S E C T I O N
sectionController.update = async (req, res, next) => {
  const {
    params: { id },
    body: { section }
  } = req;
  try {
    const result = await Section.findOneAndUpdate({ _id: id }, { section });
    if (!result) {
      const error = new Error("Section Not Found");
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

module.exports = sectionController;
