const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const htmlroutes = require('./routes/htmlroutes')
const apiroutes = require('./routes/apiroutes')
app.use(htmlroutes)
app.use(apiroutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thefitbit", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

