import React, { Component } from 'react'
import axios from 'axios'

class Todos extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',
      importance: ''
    }
    this.addTodo = this.addTodo.bind(this)
  }
  componentDidMount() {
    axios.get('/todo').then((response) => {
      this.setState({
        todos: response.data
      })
    })
  }
  addTodo() {
    let { newTodo, importance } = this.state
    axios
      .post(`/todo/${newTodo}/${importance}`)
      .then((response) => {
        this.setState({
          todos: response.data,
          newTodo: '',
          importance: ''
        })
      })
  }
  render() {
    // console.log(this.state.todos)
    // console.log(this.state.importance)

    let mappedTodos = (<h4>'You have no todos, you are todone.'</h4>)
    if (this.state.todos[0]) {
      mappedTodos = this.state.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.theTodo}</h2>
            <p>{todo.urgency}</p>
          </div>
        )
      })
    }
    return (
      <div>
        <input
          placeholder="Create a new todo"
          value={this.state.newTodo}
          onChange={(event) => this.setState({ newTodo: event.target.value })} />

        <input
          placeholder="Importance"
          value={this.state.importance}
          onChange={(event) => this.setState({ importance: event.target.value })} />

        <button onClick={this.addTodo}>Add</button>

        {mappedTodos}

      </div>
    )
  }
}
export default Todos
