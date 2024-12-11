const Course = require('../models/courseModel')

const getCourses = async (req, res) => {
    try {
        const user = await Course.find();
        console.log("It is processing");
        res.json(user);
    }
    catch {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {getCourses}