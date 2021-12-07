// Global Variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// PARSE form data
app.use(express.urlencoded({extended: false}))

// PARSE JSON
app.use(express.json())   

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true,person:name})
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg:'please provide name value'})
    } else {
        res.status(201).send({success: true, data: [...people, name]})
    }
})

app.post('/login', (req, res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    } else {

        res.status(200).send('Please Enter Credentials')
    }
})


app.listen(port, () =>{
    console.log(`Listening on port ${port}.....`)
})