import Bed from "../models/Bed"



const getSingleBed = async (req,res) => {
    const { id } = req.query
    if(!id)return res.status(400).send({error:"bad request"})
    const bed = await Bed.findById(id)
    if(!bed)return res.status(404).send({error:"not found"})
    res.status(200).send(bed)
}

export {getSingleBed}