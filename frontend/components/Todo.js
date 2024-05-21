import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { name, completed, id} = this.props.toDos
    const { toggleComplete } = this.props
    return (
      <div onClick={() => toggleComplete(id)}>
       {name} {completed && '✓'}
      </div>
    )
  }
}
