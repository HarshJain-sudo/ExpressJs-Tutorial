
import express  from "express";
import student from './routes/student.js'
const app = express()

const port = 3000

app.use('/',student);

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})