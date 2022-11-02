// Router Parameter
import express  from "express";

const app = express()

const port = 3000

// app.get('/student/delete/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`Student deleted ${req.params.id}`)
// })

// app.get('/product/:category/:id',(req,res)=>{
//     console.log(req.params)
//     // res.send(`Product name ${req.params.category} and id is ${req.params.id}`)
//     // const {category,id}=req.params
//     // res.send(`Product name ${category} and id is ${id}`)

// })

app.get('/order/:year/and/:month',(req,res)=>{
    console.log(req.params)
    res.send(`year : ${req.params.category} and month : ${req.params.id}`)
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})