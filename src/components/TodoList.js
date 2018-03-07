import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        return (
            <div className="TodoListDiv">
                <ul>
                    {
                        this.props.todoList.map(todoItem => {
                            return (
                                <li key={todoItem.id} onClick={() => this.props.updateTodo(todoItem)}>
                                    <input type="checkbox" defaultChecked={todoItem.status} />
                                    <span className={todoItem.status ? "completed" : ""} > {todoItem.text} </span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default TodoList;