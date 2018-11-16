const express = require('express')
const controller = require('./controller')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/test', controller.test)
app.get('/todo', controller.getTodos)
app.post('/todo/:todo/:urgency', controller.createTodo)


const port = 4033
app.listen(port, () => console.log(`Hard to port ${port}`))
