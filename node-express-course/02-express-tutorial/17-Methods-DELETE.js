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

// GET Method
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// Post Method
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

// PUT Method

app.put('/api/people/:id',(req, res)=> {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person)=>person.id === Number(id))
    if(!person) {
        return res
            .status(404)
            .json({success: false, msg:`No person with id ${id}`})
    } 
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

// DELETE Method

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({success: false, msg: `No person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople })

})


app.listen(port, () =>{
    console.log(`Listening on port ${port}.....`)
})