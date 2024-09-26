const express = require('express')

const app  = express()

const PORT =  process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.status(200).json({"messege" : "ok from container"})
})

app.get("/about", (req,res)=>{
    res.status(200).json({"message" : "about section"})
})

app.listen(3000, ()=>{
    console.log("app is listning on" + PORT)
})
