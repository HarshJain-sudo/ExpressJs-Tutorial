
import express  from "express";

const app = express()

const port = 3000

app.get('/student/all',(req,res)=>{
    res.send('All Student')
})

app.get('/student/delete/:id([0-9]{2})',(req,res)=>{
    console.log(req.params)
    const {id}=req.params
    console.log(id)
    if(id==10){
       return  res.send('Not Deleted')
    }
    res.send(`Student delete ${id}`)

})
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})