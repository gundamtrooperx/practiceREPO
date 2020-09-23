var routes = require("express");
const { request } = require("http");
var path = require("path");
var db = require("../models");

routes.get("/api/workouts",function(req, res ){
    db.find({})
    .then(function(records){
        console.log("get route", records)
    })
})

routes.put("/api/workouts/:id",function(req, res ){
    db.findByIdAnUpdate(req.params.id,{$push:{exercise:req.body}},{new:true})
    .then(function(records){
        console.log("put route", records)
    })
})

routes.post("/api/workouts",function(req, res ){
    db.create(req.body)
    .then(function(records){
        console.log("post route", records)
    })
})

routes.get("/api/workouts/range",function(req, res ){
    db.find({}).limit(10)
    .then(function(records){
        console.log("get route", records)
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