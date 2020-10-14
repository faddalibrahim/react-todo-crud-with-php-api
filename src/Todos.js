import React from 'react';
import { Link } from "react-router-dom";

const Todos = ({todos, deleteTodo, toggleUpdateForm}) => {
    // if(todos.empty) console.log(todos.empty)
    // console.log(todos)
    const todoList = todos.length ? (
        todos.map(({id, content}) => {
            return (
                <div className="collection-item fadeIn" key={id} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to={"/"+id}>{content}</Link>
                    <div>
                        <span className="red-text" style={{marginRight: '1rem'}} onClick={() => deleteTodo(id)}>delete</span>
                        <span className="teal-text" onClick={() => toggleUpdateForm(id)}>update</span>
                    </div>
                </div>
            ) 
        })
    ) : (
        <p className="center">No posts yet..</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos; 