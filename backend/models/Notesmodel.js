const mongoose = require("mongoose")

const Schema = mongoose.Schema

const NotesSchema = new Schema(
    {
        title:{
            type:String,
            require:true
        },
        note:{
            type:String,
            require:true
        }

    }
    ,
    {
        timestamps:true
    }
)

module.exports = mongoose.model('notes', NotesSchema)