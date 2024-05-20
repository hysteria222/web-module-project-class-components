import React from 'react'
import Form   from './Form'
import TodoList from './TodoList';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'have you done these?',
      toDos:  [
        {
          name: 'Learn JavaScript',
          id: 1, 
          completed: false
        },
        {
          name: 'Learn HTML/CSS',
          id: 2,
          completed: false
        },
        {
          name: 'Learn React',
          id: 3,
          completed: false
        },
        {
          name: 'Learn Advanced React',
          id: 4,
          completed: false
        },
        {
          name: 'Learn Back End',
          id: 5,
          completed: false
        }
      ]
    };
    console.log(this.state.toDos)
  }

  handleChange = event => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault() 
    console.log(event)
  }

  render() {
    return (
      <div>
        <TodoList message={this.state.message} toDos={this.state.toDos}/>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}


export default App 