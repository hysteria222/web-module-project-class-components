import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    const toDos = this.props.toDos
    const { toggleComplete } = this.props
    return (
      <div>
        <h1>Hello, {this.props.message}</h1>
      {
        toDos.map((todo) => <Todo key={toDos.id} toDos={todo} toggleComplete={toggleComplete}/>)
      }
      </div>
    )
  }
}


export default TodoList
