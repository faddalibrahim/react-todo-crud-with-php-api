import React, { Component } from 'react';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';
import Todos from './Todos';

class Home extends Component {
  state = {
    todos : [],
    idToUpdate: null,
    showUpdateForm: false,
    showAddForm: true
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos})
  }

  updateTodo = (newContent) => {
    const idToUpdate = this.state.idToUpdate;

    const todos = this.state.todos;


    todos.find(todo => todo.id === idToUpdate).content = newContent;

    this.setState({
      todos,
      idToUpdate: null,
      showUpdateForm: false,
      showAddForm: true
    })
  }

  toggleUpdateForm = (clickedItemId) => {
    if(!this.state.showUpdateForm){
      this.setState({
        showUpdateForm: true,
        idToUpdate: clickedItemId,
        showAddForm: false
      })
      console.log(clickedItemId)
    }else{
      this.setState({
        showUpdateForm: false,
        idToUpdate: null,
        showUpdateForm: true
      })

    }
  }

  componentDidMount(){
    fetch('http://localhost/rest/api/post/read.php')
    .then(response => response.json())
    .then(json => this.setState({todos: json.data}))
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center orange-text">Todos</h1>

        <div style={{display: this.state.showUpdateForm ? "block" : "none"}}>
          <UpdateTodo updateTodo={this.updateTodo}/>
        </div>

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleUpdateForm={this.toggleUpdateForm}/>

        <div style={{display: this.state.showAddForm ? "block" : "none"}}>
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </div>
    )
  }
}

export default Home;
