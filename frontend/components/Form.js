import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
      <input className='form-input' placeholder="Type Todo Here" onChange={this.props.handleChange}></input>
      <button className='form-button' onSubmit={this.props.handleSubmit}>Add Todo</button>
      <button className='form-button'>Clear Completed</button>
   </form>
    )
  }
}
