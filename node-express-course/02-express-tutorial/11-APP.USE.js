const express = require('express');
const app = express();
const logger = require('./logger')
// App.use will allow the logger module to be used on all routes!
app.use(logger)

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('about')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})
app.listen(5000, ()=>{
    console.log("Server is listening to port 5000")
})