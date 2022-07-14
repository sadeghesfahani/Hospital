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

    try {
        await Bed.findById(id).reserveBed()
        await newReserve.save()
    } catch (error) {
        res.status(404).send({error:"not found"})
    }
}

export { reserveABed }