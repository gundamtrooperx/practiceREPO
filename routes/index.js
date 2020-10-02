var routes= require("express").Router()
var path = require("path");
var db = require("../models");


routes.get("/api/workouts",function(req, res ){
    db.find({})
    .then(function(records){
        console.log("get route", records)
        console.log("GET - find")
        res.json(records)
    })
})

routes.put("/api/workouts/:id",function(req, res ){
    db.findByIdAndUpdate(req.params.id,
        {$push:{exercises:req.body}},
        {new:true})
    .then(function(records){
        console.log("put route", records)
        res.json(records)
    })
})

routes.post("/api/workouts",function(req, res ){
    db.create(req.body)
    .then(function(records){
        console.log("post route", records)
        res.json(records)
    })
})

routes.get("/api/workouts/range",function(req, res ){
    db.find({}).limit(10)
    .then(function(records){
        console.log("get route", records)
        res.json(records)
    })
})

routes.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

routes.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

routes.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

routes.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = routes