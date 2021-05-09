const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    workoutName: {
        type: String,
        trim: true,
        required: "Enter Name for workout"
    },
    workoutType: {
        type: String,
        trim: true,
        required: "Enter type of workout"
    },
    sets: {
        type: Number,
        required: "Enter # of sets",
        default: 1
    },
    reps: {
        type: Number,
        required: "Enter # of reps",
        default: 1
    },
    duration: {
        type: Number,
        required: "Enter duration or distance"
    }
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;