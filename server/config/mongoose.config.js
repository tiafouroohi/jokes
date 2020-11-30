const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("You are connected af in mongo"))
    .catch(err => console.log("boo", err) )