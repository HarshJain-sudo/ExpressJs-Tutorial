// routing 
import express  from "express";

const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello")
})

// app.all('*',(req,res)=>{
//     res.send('page not found')
// })

// app.all('/api/*',(req,res)=>{
//     res.send('API Page')
// })

// string path 

// app.get('/about',(req,res)=>{
//     res.send("About page")
// })

// string pattern path
// app.get('/ab?cd',(req,res)=>{
//     res.send('This route path will match acd and abcd')
// })

// regualar expression path

// app.get('/a/',(req,res)=>{
//     res.send('This is a ')
// })

// One Callback
// app.get('/cbexample1',(req,res)=>{
//     res.send('One Callback Example')
// })

// More than One Callback
// app.get('/cbexample2',(req,res,next)=>{
//    console.log('first callback')
//    next()
// },(req,res)=>{
//     console.log('second callback')
//     res.send('More than One Callback')
// })

// Array of callback
// const cb1 = (req,res,next)=>{
//     console.log('First Callback')
//     next()
// }
// const cb2 = (req,res,next)=>{
//     console.log('Second Callback')
//     next()
// }
// const cb3 = (req,res,next)=>{
//     console.log('Third Callback')
//     res.send('Array of Callback')
// }

// app.get('/cbexample3',[cb1,cb2,cb3])


// Comination of independent function and array of function
// const cb1 = (req,res,next)=>{
//     console.log('First Callback')
//     next()
// }
// const cb2 = (req,res,next)=>{
//     console.log('Second Callback')
//     next()
// }

// app.get('/cbexample4',[cb1,cb2],(req,res,next)=>{
//     console.log('Fourth callBack')
//     next()
// },(req,res)=>{
//     console.log('Fourth Callack')
//     res.send('Comination of independent function and array of function')
// })

// chained route callback
// app.route('/student')
//  .all((req,res,next)=>{
//     console.log('This runs first for all HTTP request')
//     next()
//  })
//  .get((req,res)=>{
//     res.send('All Student')
//  })
//  .post((req,res)=>{
//     res.send('Add new Student')
//  })
//  .put((req,res)=>{
//     res.send('Update Student')
//  })

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})