const router = require('express').Router()
const {client} = require('../db/pgconnect')


//GET route
router.get('/',(req,res)=>{
    client.query(`SELECT * from Alumni;`).then(data=>{
        // console.log(data.rows,"here")
        const dataArray = data.rows
        res.status(201).json(dataArray)
    })
})

//POST route
router.post('/new',(req,res)=>{
    const {name,phone,email,remarks} = req.body;
    client.query(`
        INSERT INTO Alumni(name,phone,email,remarks) values('${name}','${phone}','${email}','${remarks}')`)
        .then(data=>{
            if(data.rowCount == 1){
                res.status(201).json({succes:true})
            }
        }).catch(err=> console.log('post err',err))
})


//UPDATE route
router.put('/edit/:id',(req,res)=>{
    console.log(req.params.id)
    client.query(`UPDATE Alumni set phone='${req.body.phone}', email='${req.body.email}' WHERE alumni_id=${req.params.id}`)
    .then((data)=>{
        if(data.rowCount == 1){
            res.status(201).json({success:true})
        }else{
            res.status(500).json({success:false})
        }
    }).catch(err => console.log("PUT ERROR ROUTES",err))
})
//DELETE route
router.delete('/:id',(req,res)=>{
    client.query(`DELETE from Alumni WHERE alumni_id = ${req.params.id}`).then((data)=>{
        if(data.rowCount == 1){
            res.status(201).json({success:true})
        }else{
            res.status(500).json({success:false})
        }
    }).catch(err=>console.log("DELETE ERR",err))
})



module.exports = {
    router
}