
const allStudent = (req,res)=>{
    res.send('All Student')
}

const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id}=req.params
    console.log(id)
    if(id==10){
       return  res.send('Not Deleted')
    }
    res.send(`Student delete ${id}`)

}

export {allStudent,deleteStudent}