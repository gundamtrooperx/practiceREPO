const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is Required"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is Required"
            },
            duration: {
                type: Number,
                trim: true,
                
            },
            weight: {
                type: Number
               
            },
            sets: {
                type: Number
                
            },
            reps: {
                type: Number
                
            },
            distance: {
                type: Number
                
            }
        }]


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;