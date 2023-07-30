
const express = require("express")
const { default: mongoose } = require("mongoose")
const notes = require("./routes/notes") 
const app = express()



app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path , req.method)
    next()
})

app.use('/api/notes', notes )

mongoose.connect('mongodb+srv://azimdamani:Azimadamani@cluster0.3dlb3tk.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(4000 , () => {
            console.log("on post 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })