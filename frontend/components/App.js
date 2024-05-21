import React from 'react'
import Form   from './Form'
import TodoList from './TodoList';


let id = 0; 
const getId = () => id++; 

const initToDos = [
  {name: 'Learn JavaScript',
    id: getId(), 
    completed: false},
  {name: 'Learn HTML/CSS',
    id: getId(),
    completed: false},
  {name: 'Learn React',
    id: getId(),
    completed: false},
  {name: 'Learn Advanced React',
    id: getId(),
    completed: false},
  {name: 'Learn Back End',
    id: getId(),
    completed: false}
];


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'have you done these?',
      toDos:  initToDos
    };
    
  }

 addTodo = (name) => {
  this.setState({
    ...this.state.toDos, 
    toDos: this.state.toDos.concat({name, id: getId(), completed: false})
  })
}

toggleComplete = (id) => {
  this.setState({
    ...this.state.toDos,
    toDos: this.state.toDos.map(td => {
      if(id === td.id) {
        return {...td, completed: !td.completed}
      }
      return td 
    })
  })
}

  render() {
    console.log(this.state.toDos)
    return (
      <div>
        <TodoList message={this.state.message} toDos={this.state.toDos} toggleComplete={this.toggleComplete}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}



export default App 