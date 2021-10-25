var express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')
var app = express()


    app.get('/hello', function (req, res) {
        res.send('Hello ' + req.query.name)
    })

    // app.get('/hello/:id', function (req, res) {
    //     res.send('Hello ' + req.params.id)
    // })


    app.get('/person', function (req, res) {
        res.send('Person ' + {name: 'Ivan'})
    })

    app.get('/hel+o/:id', function (req, res) {
        res.send('Routing ' + req.params.id)
    })
    app.get('/hel?o/:id', function (req, res) {
        res.send('Routing /hel?o/:id')
    })
    app.get('/hello/(:id) ?', function (req, res) {
        res.send('Routing hello/(:id) ?')
    })
    app.get('/.*/', function (req, res) {
        res.send('Routing /.*/')
    })

const persons = []
let id = 0

// app.use(bodyParser.json())

app.get('/person/create', (req, res) => {
    const person = {
        id: ++id,
        name: req.query.name,
        age: +req.query.age
    }
    persons.push(person)
    res.send(person)
})

app.get('/person/:id', (req, res) => {
    res.send(persons.find(({id}) => id === +req.params.id))
})

// app.post('/person', (req, res) => {
//     const person = {...req.body, id: ++id }
//     persons.push(person)
//     res.send(person)
// })

app.listen(3000, () => console.log('Hello from 3000'))
