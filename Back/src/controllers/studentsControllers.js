const StudentModel = require('../models/studentsModel');

const studentsControllers = {};

studentsControllers.register = async (req, res, next) => {
    const {body: {
        lastName, firstName, phone, email, gender, address, classe, section, level,
        parents:{fatherName, motherName, phoneParent, emailParent, addressParent, jobFather, jobMother}
    }} = req;

    const newStudent = new StudentModel({
        lastName, firstName, phone, email, gender, address, classe, section, level,
        parents:{fatherName, motherName, phoneParent, emailParent, addressParent, jobFather, jobMother}
    });
    console.log(newStudent);
    
    try {
        await newStudent.save();
        return res.send(({
            message: 'add new Student Successfully',
        }));
        
        
    } catch(e) {
        if(e.code === 11000 && e.name === 'MongoError') {
            const error = new Error(`This email ${newStudent.email} is already taken`);
            next(error);
        } 
        else {
            next(e);
        }
    }
}
studentsControllers.get = async (req, res, next) => {
  try {
    // const result = await User.find().sort({dateCreationAccount: -1});
    const {query:{offset, limit}} = req;
    const options = {
        page: parseInt(offset, 10),
        limit: parseInt(limit, 10),
        sort: {dateCreationAccount: -1}
    };
    const result = await StudentModel.paginate({}, options) ;
    const {docs, total} = result;
    return res.send({
        total,
        result: docs,
    });
   } catch(e) {
       next(e);
   }
  }

// F I L T E R   P A R   E M A I L
studentsControllers.getEmail = async(req, res, next) => {
    const {params: {email}} = req;
    try {
        await StudentModel.findOne({email}).populate({ 
          path: 'section',
          model: 'Section', 
          populate: {
            path: 'classId',
            model: 'ClassSchool',
            populate: {
              path: 'schoolLevelId',
              model: 'SchoolLevel'
            } 
          } 
       })
       .exec((error, result)=>{
        if(!result) {
            const error = new Error(`This email : ${email} not exsite`);
            error.status = 404;
            next(error);
        }
        res.send({
            result
        });
      })
    } catch(e) {
        next(e);
    }
}

 // D E L E T E   S T U D E N T S

  studentsControllers.delete = async (req, res, next) => {
    const {
      params: { id }
    } = req;
    try {
      const result = await StudentModel.findOneAndDelete({ _id: id });
      if (!result) {
        const error = new Error("This Student not found");
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
  
  // U P D A T E   S T U D E N T S
  studentsControllers.update = async (req, res, next) => {
    const {
      params: { id },
      body: {
        lastName, firstName, phone, email, address, classe, level,
      }
    } = req;
    try {
      const result = await StudentModel.findOneAndUpdate(
        { _id: id },
        { 
            lastName, firstName, phone, email, address, classe, level,
       }
      );
      if (!result) {
        const error = new Error("This Student not found");
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

module.exports = studentsControllers;