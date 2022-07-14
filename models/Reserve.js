import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema({
    date:Number,
    bed:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Beds'
    },
    name:String
})


const Reserve = mongoose.models.Reserves || mongoose.model("Reserves",reserveSchema)

export default Reserve;