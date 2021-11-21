const express = require('express')
const app = express()
const authorize = require('./authorize')
const logger = require('./logger')

app.use([logger,authorize])

app.get('/', (req, res) =>{
    res.send('Home')
})
app.get('/about', (req, res) =>{
    res.send('About')
})
app.get('/api/items', (req, res) =>{
    console.log(req.user)
    res.send('Items')
})

app.listen (5000, ()=>{
    console.log("Server is listening to port 5000...")
})