import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    beds:[
        {bed:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Beds"
        }}
    ]
})

const Room = mongoose.models.Rooms || mongoose.model('Rooms',roomSchema)

export default Room
