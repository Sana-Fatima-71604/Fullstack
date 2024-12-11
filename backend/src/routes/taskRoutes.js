const express = require('express');
const router = express.Router();
const { getTasks, getById } = require('../controllers/taskController');

 
// Routes
router.get('/', getTasks);

router.get('/:id', getById);
 
module.exports = router;