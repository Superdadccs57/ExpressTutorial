const express = require('express');
const app = express();
const port = process.env.Port || 5000;
let { people } = require('./data')

// GET Method!
app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
})

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}....`)
})