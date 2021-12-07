// Global Variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// PARSE form data
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
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