const taskRouter = require('express').Router();
const taskController = require('../controllers/taskController');
const { protect } = require('../utils/auth');

taskRouter.get('/', protect, taskController.getAllTask);
taskRouter.get('/:id', protect, taskController.getTask);
taskRouter.post('/', protect, taskController.createTask);
taskRouter.put('/:id', protect, taskController.updateTask);
taskRouter.delete('/:id', protect, taskController.deleteTask);
taskRouter.get('/user/:id', protect, taskController.getUserTask);


module.exports = taskRouter;
