const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    date:{
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    where: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    budget: {
      type: Number,
      required: true
    },
    participants: {
      type: Number,
      default:0
    },
    image: {
      type: String
    }, 
    favorite: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)
activitySchema.plugin(AutoIncrement, { inc_field: 'uid' });//aam n3te la kl instance id

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity
