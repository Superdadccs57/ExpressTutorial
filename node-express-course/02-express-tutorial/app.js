// Global Variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const people = require('./routes/people')
const login = require('./routes/auth')


// static assets
app.use(express.static('./methods-public'))

// PARSE form data
app.use(express.urlencoded({extended: false}))

// PARSE JSON
app.use(express.json())
app.use('/api/people', people)
app.use('/login', login)  





app.listen(port, () =>{
    console.log(`Listening on port ${port}.....`)
})