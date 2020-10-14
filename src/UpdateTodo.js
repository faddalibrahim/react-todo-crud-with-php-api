import React, { Component } from 'react';

class UpdateTodo extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.state.content);
        this.setState({ 
            content: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <label>Update Clicked Todo</label>
                    <input type="text" id="content" value={this.state.content} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default UpdateTodo;