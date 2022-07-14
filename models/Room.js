import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    beds:[
        {number:Number,price:Number,isReserved:Boolean}
    ]
})

const Room = mongoose.models.Rooms || mongoose.model('Rooms',roomSchema)

export default Room
