const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    date: {
        type: Date,
        default: new Date(),
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
            reps: {
                type: Number
                
            },
            sets: {
                type: Number
                
            },
            distance: {
                type: Number
                
            }
        }]


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;