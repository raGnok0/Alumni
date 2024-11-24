const express = require('express')
const cors= require('cors')
const bodyParser = require('body-parser')
const {router} = require('./routes/router')
const app = express()

app.use(cors())
app.use(bodyParser.json())

// app.get("/api",(req,res)=>{
//     return res.json({message:"Hello from backend"})
// })

app.use('/',router)


app.listen(3001,()=>{
    console.log(`Listening...on 3000`)
})