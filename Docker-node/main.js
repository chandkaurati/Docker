const express = require('express')
const mongoose  = require("mongoose")

const app  = express()

const PORT =  process.env.PORT || 4000

;(async function () {
     try {
        const connectoinInstance =  await mongoose.connect("mongodb://localhost:27017")
        console.log(`database connected successfully AT ${connectoinInstance.connection.host}`)
     } catch (error) {
        console.log(error)
     }
})()

app.get("/", (req,res)=>{
    res.status(200).json({"messege" : "ok from container"})
})

app.get("/about", (req,res)=>{
    res.status(200).json({"message" : "about section"})
})

app.listen(PORT, ()=>{
    console.log("app is listning on" + PORT)
})
