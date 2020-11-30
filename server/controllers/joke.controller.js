const { json } = require("express");
const {Joke} = require("../models/joke.models");

module.exports.getJokes = (req, res) => {
    Joke.find().pretty()
    .then(data => res.json({message:"hahaha u r so funny", data: data}))
    .catch(err => res.json({message:"oh no", data: err}))
}


//getOneJoke: (req, res) => {
//    Joke.findOne({_id: })
//    .then(data => res.json({message:"haha", data: data}))
//    .catch(err => res.json({message:"oh no", data: err}))
//}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(data => res.json({message:"haha", data: data}))
    .catch(err => res.json({message:"oh no", data: err}))
}

//Joke.updateJoke({setup: ""}),{
    //
//    .then(saveResult => res.json(saveResult))
//    .catch(err => res.json({message:"nope", data: err}))//
//}

//Joke.remove({_id:})
//.then(deletedJoke => {
    //
//.catch(err => res.json(err))
//})

