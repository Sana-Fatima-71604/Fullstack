const Task = require('../models/taskModel')
 
 
const getTasks = async (req, res) =>{
    try{
        const task = await Task.find();
       console.log("successful");
       res.json(task);
    }
    catch(error){
        
        res.status(500).json({ message: 'Server Error' });
    }
}

const getById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);    }
    catch(error){
        
        res.status(500).json({ message: 'Server Error' });
    }
}
 
 
module.exports = {getTasks, getById}
