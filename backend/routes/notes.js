const express = require("express")
const router = express()
const NotesModel = require("../models/Notesmodel")
const { default: mongoose } = require("mongoose")

router.get('/' , async(req, res) => {
    const mynotes = await NotesModel.find({}).sort({createdAt: -1})
    res.status(200).json(mynotes)
})

router.delete('/:id' , async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "invalid delete"})
    }
    const delnote = await NotesModel.findByIdAndDelete({_id:id})

    res.status(200).json(delnote)
})

router.patch('/:id', async(req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "invalid delete"})
    }
    const updatenote = await NotesModel.findByIdAndUpdate({_id:id} , {
        ...req.body
    })

    res.status(200).json(updatenote)
})

router.post('/' , async(req, res) =>{
    const {title, note} = req.body

    try{
        const mynote = await NotesModel.create({title, note})
        res.status(200).json(mynote)

    }
    catch(error){
        res.status(400).json({error : error.message})

    }
})


module.exports = router