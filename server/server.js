require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const bodyParser = require('body-parser')
const massive = require('massive')
const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

const app = express()
massive(CONNECTION_STRING)
  .then((dbInstance) => {
    // console.log(dbInstance)
    app.set('db', dbInstance)
  })

app.use(bodyParser.json())

app.get('/test', controller.test)
app.get('/todo', controller.getTodos)
app.post('/todo/:todo/:urgency', controller.createTodo)


const port = SERVER_PORT || 4033
app.listen(port, () => console.log(`Hard to port ${port}`))
