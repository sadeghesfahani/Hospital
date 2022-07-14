import { reserveABed } from "../../controllers/reserve"

export async function handler(req, res){
    if(req.method === "POST")reserveABed(req, res)
}