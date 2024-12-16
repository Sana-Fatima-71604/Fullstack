const Course = require('../models/courseModel')

const getCourses = async (req, res) => {
    try {
        const user = await Course.find();
        console.log("It is fetching all courses data");
        res.json(user);
    }
    catch {
        res.status(500).json({ message: 'Server Error' });
    }
}

const addCourse = async (req, res) => {
    try {
        const name = req.body.name;
        const level = req.body.level;
        const status = req.body.status;
        const hours = req.body.hours;

        console.log("It is adding the data")

        const course = await Course.create({name, level, status, hours});

        res.status(201).json({course, message: "course created successfully"});
    } catch(error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {getCourses, addCourse}