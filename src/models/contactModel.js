const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: { type: String, default: null },
    address: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    telPhoneNumber: { type: String, default: null },
    linkFace: {  type: String, default: null },
    linkInsta: {  type: String, default: null },
})

module.exports = mongoose.model('contact', contactSchema);