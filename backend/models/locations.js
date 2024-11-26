const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const locationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    image: {
      type: String
    }, 
    stars:{
        type:Number,
    }
  },
  { timestamps: true }
)
locationSchema.plugin(AutoIncrement, { inc_field: 'location_id' });

const Location = mongoose.model('Location', locationSchema)

module.exports = Location
