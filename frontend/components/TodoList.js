import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.message}</h1>
      {
        this.props.toDos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>
        })
      }
      </div>
    )
  }
}


export default TodoList
