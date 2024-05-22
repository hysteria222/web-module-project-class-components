import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  state = {
    showAll: true, 
  }

  toggleShowAll = evt => { 
    this.setState({
      ...this.state, 
      showAll: !this.state.showAll
    })
  }

  render() {
    const toDos = this.props.toDos
    const { toggleComplete } = this.props
    const filtered = toDos.filter(td => !td.completed || this.state.showAll)
    return (
      <div>
        <h1>Hello, {this.props.message}</h1>
      {
        filtered.map((todo) => <Todo key={toDos.id} toDos={todo} toggleComplete={toggleComplete}/>)
      } 
      <button className="todo-list-button" onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed' : 'Show All'}</button>
      </div>
     
    )
  }
}


export default TodoList
