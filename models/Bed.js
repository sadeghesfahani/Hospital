import mongoose from "mongoose"

export const bedSchema = new mongoose.Schema({
    number:Number,
    price:Number,
    isReserved:Boolean
})

bedSchema.methods.reserveBed = function(){
    this.isReserved = true
    return this.save()
}

bedSchema.methods.unreservedBed = function(){
    this.isReserved = false
    return this.save()
}

const Bed = mongoose.models.Beds || mongoose.model('Beds',bedSchema)

export default Bed