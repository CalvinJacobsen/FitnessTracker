const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", (req, res) => {

    db.Workout.find({}).sort({ _id: -1 }).limit(1)
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {

});

router.put("/api/workouts/:id", (req, res) => {

    console.log(req.params.id)
    db.Workout.findByIdAndUpdate(req.params.id, {$set: { exercises: req.body }})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("workout added")
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

router.post("/api/workouts", (req, res) => {

    db.Workout.create(req.body).then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });

});

module.exports = router;