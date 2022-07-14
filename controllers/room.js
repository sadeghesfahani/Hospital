import Room from "../models/Room"

const getAllRooms = async(req,res) => {
    const rooms = await Room.find()
    res.status(200).send(rooms)
}

const getSingleRoom = async(req,res) => {
    const { id } = req.query
    if(!id)return res.status(400).send({error:"bad request"})
    const room = await Room.findById(id).populate('beds.bed')
    if(!room)return res.status(404).send({error:"not found"})
    res.status(200).send(room)
}

export {getAllRooms, getSingleRoom}