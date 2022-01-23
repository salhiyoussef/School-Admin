const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate');

const {
    Schema,
    model
} = mongoose;

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const validatePhone = /^\d{10}$/;

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 12,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        uppercase: true,
        maxlength: 12,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        // validate: [validateEmail, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    typeAccount: {
        type: String,
        required: true,
    },
    gendre: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
        // validate: validatePhone,
        maxlength: 10,
    },
    address: {
        type: String,
        required: true,
    },
    dateCreationAccount: {
        type: Date,
        default: new Date(),
    },
});

// H A S H   P A S S O W R D
usersSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        return next();
    } catch(e) {
        return next(e);
    }
});

// C O M P A R E   P A S S W O R D
usersSchema.methods.comparePassword = function(password, hash, collback) {
    bcrypt.compare(password, hash, (err, succes) => {
        if (err) {
            return collback(err);
        }
        return collback(null, succes);
    });
}

//   D E L E T E   P A S S O W R D   I N   J S O N
usersSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}

usersSchema.plugin(mongoosePaginate);
const User = model('User', usersSchema);

module.exports = User;