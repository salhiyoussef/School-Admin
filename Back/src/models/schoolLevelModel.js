const mongoose = require('mongoose');

const {
    Schema,
    model
} = mongoose;

const schoolLevelSchema = new Schema({
    level: {type: String, required: true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const SchoolLevel = model('SchoolLevel', schoolLevelSchema);
module.exports = SchoolLevel;