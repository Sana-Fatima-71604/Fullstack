const mongoose = require('mongoose');
 
const taskSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { timestamps: true });
 
const Task = mongoose.model('task', taskSchema); //task

module.exports = Task;
 