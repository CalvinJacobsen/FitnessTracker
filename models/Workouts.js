const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter Name for workout"
    },
    duration: {
        type: Number,
        required: "Enter duration or distance"
    },
    weight: {
        type: Number,
        required: "Enter amount of weight lifted"
    },
    reps: {
        type: Number,
        required: "Enter # of reps",
    },
    sets: {
        type: Number,
        required: "Enter # of sets",
    },
    distance: {
        type: Number,
        required: "Enter # of miles",
    }
});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,     
    },
    exercises : [exercisesSchema]
});


const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;