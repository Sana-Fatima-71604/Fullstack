const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, required: true },
    status: { type: String, required: true },
    hours: { type: Number, required: true }
}, { timestamps: true })

const course = mongoose.model('course', courseSchema);

module.exports = course;