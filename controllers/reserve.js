import Reserve from "../models/Reserve"
import Bed from "../models/Bed"

const reserveABed = async(req, res) => {
    const { id } = req.query 
    const { name } = req.body

    const newReserve = new Reserve({
        date:new Date(),
        bed:id,
        name
    })

    const bed = await Bed.findById(id)
    if(!bed) return res.status(404).send({error:"not found"})
    await bed.reserveBed()
    await newReserve.save()
  
}

export { reserveABed }