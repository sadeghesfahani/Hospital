import mongoose from "mongoose";

export default async function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI)
}