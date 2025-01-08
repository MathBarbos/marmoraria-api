const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
    studentName: { type: String, default: null },
    class1: { type: Number, default: null },
    class2: { type: Number, default: null },
    class3: { type: Number, default: null },
    class4: { type: Number, default: null },
    process: { type: mongoose.Schema.Types.ObjectId, ref: 'processIntern' },
})

module.exports = mongoose.model('contact', processSchema);