const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: { type: String, required: true },
    date: { type: Date, required: false },
    important: { type: Boolean, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    completed: { type: Boolean, default: false}
});

taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
