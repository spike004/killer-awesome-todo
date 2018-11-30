module.exports = {
  test: (req, res, next) => {
    res.status(200).send('Woopie Goldberg')
  },
  getTodos: (req, res) => {
    let dbInstance = req.app.get('db')
    dbInstance.get_todos()
      .then((todos) => {
        console.log(todos)
        res.status(200).send(todos)
      })
  },
  createTodo: (req, res) => {
    let { todo, urgency } = req.params
    let dbInstance = req.app.get('db')

    dbInstance.add_todo(todo, urgency)
      .then((todos) => {
        console.log(todos)
        res.status(200).send(todos)
      })
  }
}