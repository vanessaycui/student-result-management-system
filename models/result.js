const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resultSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },

    student: 
    {
        type: Schema.Types.ObjectId,
        ref:'Student'
    },
   result: {
      type: string,
      required: true
    }, 
},{
    timestamps: true
    }
)

module.exports = mongoose.model('Result', resultSchema);
