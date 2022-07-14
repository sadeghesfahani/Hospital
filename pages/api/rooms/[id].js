import {getSingleRoom} from "../../../controllers/room";

import connectToDb from "../../../utils/connectToDb";

export default async function handler(req, res){
    await connectToDb()
    if(req.method === "GET")getSingleRoom(req, res)
}