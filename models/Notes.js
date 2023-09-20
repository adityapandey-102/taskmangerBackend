const mongoose= require('mongoose');
const { Schema } = mongoose;
const notesSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true,
    },
    tag: {
        type : String,
        default:"General"
    },
    categorie:{
        type : String,
        required : true,
    },
    timeStarted: {
        type : Date,
        default : Date.now
    },
    timeToComplete: {
        type : Date,
        required : true
    },
    timeDone:{
        type : Date,
        required : true
    }

  });

  module.exports=mongoose.model('notes',notesSchema)