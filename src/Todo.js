import React, { Component } from 'react';
import axios from 'axios'

class Todo extends Component {
  state = {
    todo : {},
  }

  componentDidMount(){
    axios.get(`http://localhost/rest/api/post/read_single.php?id=${this.props.match.params.todo_id}`)
    .then(json => this.setState({todo: json.data}))
  }


  render() {
    return (
     <div>
        <div className="card">
          <div className="card-content">
            <p>{this.state.todo.body ?? "No such item exists"}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;
