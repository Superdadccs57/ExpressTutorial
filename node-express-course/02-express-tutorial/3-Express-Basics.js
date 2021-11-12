const express = require('express')
const app = express()
app.get('/', (req, res)=>{
    console.log('User hit the Refresh button!')
    res.status(200).send('Welcome to the HomePage')
})
app.get('/about', (req, res) => {
    res.status(200).send('Welcome to the About Page!')
})
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not Found!</h1>')
})
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen