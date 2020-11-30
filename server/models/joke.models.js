const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "You Can't Make People Laugh By Being Quiet!"],
        min_length: [10, "Joke Must Be At Least 10 Characters Long!"]
    }, 
    punchline: {
        type: String,
        required: [true, "I'm Waiting..."],
        min_length: [3, "Joke Can't Be That Funny if it's Less Than 3 Characters Long!"]
    }
}, {timestamps: true})

const Joke = mongoose.model("joke", JokeSchema);

module.exports = {
    Joke
}