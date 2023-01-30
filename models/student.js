const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {
      type: Date,
      required: true
    },
},{
    timestamps: true,
    }
)

module.exports = mongoose.model('Student', studentSchema);
