import express from "express"

const app = express()
const PORT  = 4000

app.get("/", (req,res)=>{
    res.send("Hi")
})

app.get("/get", (req,res)=>{

res.json(200).status({message:"ok"})

})

app.listen(PORT, ()=>{
    console.log(`app is listning on port ${PORT}`)
})
