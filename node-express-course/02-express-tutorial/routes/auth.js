const express = require('express');
const login = express.Router();

app.post('/login', (req, res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    } else {

        res.status(200).send('Please Enter Credentials')
    }
})

module.exports = login