import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state,
        name: value
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)
  }

  render() {
    return (
  <form onSubmit={this.onSubmit}>
    <input type="text" className='form-input' placeholder="Type Todo Here" onChange={this.onChange} value={this.state.name}/>
    <input type ="submit" />
  </form>
    )
  }
}
