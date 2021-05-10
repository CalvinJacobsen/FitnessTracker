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

router.put("/api/workouts/:id", ({body, params}, res) => {

    console.log("reqData:" + body)
    console.log("reqData:" + body.name)

    db.Workout.findByIdAndUpdate(params.id,
        {
            $push:
            {
                exercises: body
            }
        },
        { new: true }
    ).then(workout => { res.status(200).json(workout) })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
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