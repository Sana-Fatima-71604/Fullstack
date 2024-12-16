const express = require('express');
const router = express.Router();
const { getCourses, addCourse } = require('../controllers/courseController');

router.get('/', getCourses);

router.post('/add', addCourse)

module.exports = router;