const Task = require('../models/task');
const User = require('../models/user');
const ErrorHandler = require('../utils/customError');


const getAllTask = async (req, res, next) => {
    try {
        const tasks = await Task.find({}).populate('user', 'name');
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
}

const getUserTask = async (req, res, next) => {
    const { id } = req.user;

    try {
        const tasks = await Task.find({ user: id }).populate('user', 'name');
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
}


const getTask = async (req, res, next) => {
    const { id } = req.params;

    try {
        const
            task = await Task.findById
                (id).populate('user', 'name');
        if (task) {
            res.status(200).json(task);
        }
        else {
            next(new ErrorHandler('Task not found', 404));
        }

    }
    catch (error) {
        next(error);
    }
}

const createTask = async (req, res, next) => {
    const { 
        title, description, status, dueDate
    } = req.body;
    const { id } = req.user;
    // console.log(req.user);

    // console.log(req.body);

    try {
        const user = await
            User.findById(id);
            // console.log(user);
        const task = new Task({
            title, description, status, dueDate,
            user: user.id
        });
        // console.log(task);

        const savedTask = await task.save();
        console.log(savedTask);


        // user.tasks = user.tasks.concat(savedTask._id);
        
        res.status(201).json(savedTask);
    }
    catch (error) {
        next(error);
    }
}

const updateTask = async (req, res, next) => {
    const { id } = req.params;
    const { title, 
        description, status, dueDate
     } = req.body;

    try {
        const task = await Task

            .findByIdAndUpdate(id, { 
                title, description, status, dueDate
             }, { new: true });
        if (task) {
            res.status(200).json(task);
        }
        else {
            next(new ErrorHandler('Task not found', 404));
        }
    }
    catch (error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);
        if (task) {
            res.status(200).json({
                message: 'Task deleted successfully'
            });
        }
        else {
            next(new ErrorHandler('Task not found', 404));
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTask,
    getTask,
    getUserTask,
    createTask,
    updateTask,
    deleteTask
};