const router = require("express").Router();
const db = require("../models")


router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        },
    ])
    .then(workout => {
        console.log("workout workout " + workout);
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;