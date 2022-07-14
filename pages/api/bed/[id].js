import { getSingleBed } from "../../../controllers/bed";
import connectToDb from "../../../utils/connectToDb";



export default async function handler(req, res){
    await connectToDb()
    if(req.method === "GET")getSingleBed(req, res)
}