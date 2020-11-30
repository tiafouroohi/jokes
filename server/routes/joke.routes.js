
const JokesController = require("../controllers/joke.controller");

module.exports = app =>{

    app.get("/api/joke", JokesController.getJokes);
    app.post("/api/joke", JokesController.createJoke);
}


//create is post