const express = require('express');

const app = express()

app.use(express.json());

let id = 0;
let user = {

}

app.get('/',(req,res)=> {
    res.send('Hello')
})

app.get('/get',(req,res) => {
    const { userId } = req.query;
    res.send('Successfully')
})


app.post('/post',(req,res)=> {
    const { email, password } = req.body;
    user[id] = {
        email,
        password
    }
    id++;
    console.log(user)
    res.send({email,password})
})

app.put('/update',(req,res) => {
    const { id,password } = req.body;
    user[id].password = password;
    console.log(user)
    res.send("Data Updated Successfully")
})

app.delete('/delete',(req,res) => {
    const { id } = req.body;
    delete user[id];
    console.log(user)
    res.send("Successfully Deleted")
})

app.listen(3000,()=>{
    console.log("Server is listening on PORT 3000")
})
