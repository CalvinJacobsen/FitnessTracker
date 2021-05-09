const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const WorkoutModel = require("./models/Workouts.js");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const data = {
    workoutName: "crunches",
    workoutType: "abdominal",
    sets: 3,
    reps: 6,
    duration: "20",
};

WorkoutModel.create(data).then(workoutsdb => {
    console.log(workoutsdb);
}).catch(({ message }) => {
    console.log(message)
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

