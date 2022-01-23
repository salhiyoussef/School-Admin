const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const {
    Schema,
    model
} = mongoose;

const regexPhone = /^$|^\d{10}$/;
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const StudentSchema = new Schema({
    lastName: {
        type: String,
        required: true,
        uppercase: true,
        maxlength: 20,
        minlength: 4
    },
    firstName: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 4
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        // validate: regexPhone,
        index: true,
        max: 10
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        // validate: validateEmail
    },
    gender: {
        type: String,
        required: true,
        // enum: ['Male', 'Female']
    },
    address: {
        type: String,
        required: true
    },
    classe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassSchool"
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section"
    },
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolLevel"
    },
    // academic: {
    //     currentClass: {
    //         type: String,
    //         required: true
    //     },
    //     lastClass: {
    //         type: String,
    //     },
    //     registration: {
    //         type: String,
    //         required: true
    //     },
    //     lastSchool: {
    //         type: String
    //     },
    // },
    parents: {
        fatherName: {
            type: String,
            required: true
        },
        motherName: {
            type: String,
            required: true
        },
        phoneParent: {
            type: String,
            required: true,
            unique: true,
            // validate: regexPhone,
            index: true,
            max: 10
        },
        emailParent: {
            type: String,
            required: true,
            index: true,
            unique: true,
            // validate: validateEmail
        },
        addressParent: {
            type: String,
            required: true
        },
        jobFather: {
            type: String,
            required: true
        },
        jobMother: {
            type: String,
            required: true
        }
    },
    dateCreation: {
        type: Date,
        default: new Date()
    },
    dateModification: {
        type: Date,
        default: new Date()
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});


StudentSchema.plugin(mongoosePaginate);
const StudentModel = model('Student', StudentSchema);
module.exports = StudentModel;