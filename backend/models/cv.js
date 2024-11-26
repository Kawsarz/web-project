

//modules/cv.js
const mongoose = require('mongoose'); 

const cvSchema = new mongoose.Schema({ 
    FirstName: String, 
    LastName: String, 
    Matricule: Number 
}, { collection: 'user' })
module.exports = mongoose.model('CV', cvSchema);