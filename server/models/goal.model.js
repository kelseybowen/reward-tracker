const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    goalName: {
        type: String,
        required: [true, "Goal Name is required!"],
        minlength: [3, "Goal Name must be at least 3 characters long!"]
    },
    endGoal: {
        type: Number,
        required: [true, "End Goal is required!"],
        min: [1, "Must be a number greater than 0"]
    },
    description: {
        type: String,
    },
    ownerId: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        default: 0
    },
    isCompleted: {
        type: Boolean,
        enum: [true, false],
        default: false
    }
},
    {timestamps: true});

const Goal = mongoose.model('Goal', GoalSchema);
module.exports = Goal;