import { reserveABed } from "../../controllers/reserve"
import connectToDb from "../../utils/connectToDb"

export default async function handler(req, res){
    await connectToDb()
    if(req.method === "POST")reserveABed(req, res)
}