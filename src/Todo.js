import React, { Component } from 'react';

class Todo extends Component {
  state = {
    todo : {},
    // todo_id : 
  }

  componentDidMount(){
     fetch(`http://localhost/rest/api/post/read_single.php?id=${this.props.match.params.todo_id}`)
    .then(response => response.json())
    .then(json => this.setState({todo: json}))
    // .then(json => console.log(json))
  }


  render() {
    console.log(this.props)
    console.log(typeof +this.props.match.params.todo_id)

    return (
     <div>
        <h1></h1>
        <p>{this.state.todo.body}</p>
     </div>

    )
  }
}

export default Todo;
