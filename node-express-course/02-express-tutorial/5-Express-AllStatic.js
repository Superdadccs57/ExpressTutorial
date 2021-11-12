const express = require('express');
const app = express()
const path = require('path');

app.use(express.static('./public'))

// app.get('/', (req,res) => {
//    res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) 
// adding to Static assets
// Server Side Rendering (SSR)
// })




 app.all('*', (req, res)=>{
    res.status(404).send('Resource not Found')
 })

app.listen(5000,()=>{
    console.log('Server is Listening to port 5000...')
})