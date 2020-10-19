import React, { Component } from 'react';
import axios from 'axios'
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
    // axios.get(`http://localhost/rest/api/post/delete.php?id=${id}`)       
    // .then(json => {
    //     if(json.data.success){
    //       const todos = this.state.todos.filter(todo => todo.id !== id);  
    //       this.setState({todos})
    //       alert(json.data.success) 
    //     }
    // }).catch(error => alert("Error connecting to database. Try again later")) 
    const url = 'http://localhost/rest/api/post/deletee.php'; 
    const data = {id};
    // const options = {
    //   headers: {'Content-Type': 'application/json'} 
    // };
    // axios.delete(url, data, options) 
    axios.delete(url, data) 
    .then(response => {
      console.log(response)
    })
    .catch(error => alert("Error connecting to database. Try again later")) 
  }

  addTodo = (todo) => {
    const url = 'http://localhost/rest/api/post/create.php';
    const options = {
      headers: {'Content-Type': 'application/json'} 
    };
    axios.post(url, JSON.stringify(todo)) 
    .then(response => {
      todo.id = Math.random(); 
      let todos = [...this.state.todos, todo];
      this.setState({todos})
      alert(response.data.message)
    })
    .catch(err => { 
      alert(err + ", Please try again later")
    })  
  }

  //random id generated from create to will not match id to update
  //also check if response was postive before updating dom
  //put the code that hides the update form into a function call

  updateTodo = (newContent) => {
    const idToUpdate = this.state.idToUpdate;

    const url = 'http://localhost/rest/api/post/update.php';
     axios.put(url, JSON.stringify({idToUpdate, newContent}))
    .then(response => {
      const todos = this.state.todos;
      todos.find(todo => todo.id === idToUpdate).content = newContent;
      this.setState({
        todos,
        idToUpdate: null,
        showUpdateForm: false,
        showAddForm: true
      })
      alert(response.data.message);
    })
    .catch(err => { 
        this.setState({
          idToUpdate: null,
          showUpdateForm: false,
          showAddForm: true
        })
      alert(err + ", Please try again later") 
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
    axios.get('http://localhost/rest/api/post/read.php')
    .then(response => {
      console.log(response)
      if(response.data.data){
        this.setState({todos: response.data.data})
      }
    })
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
